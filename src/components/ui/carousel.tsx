import { cn } from '@/lib/utils'
import type { CreateEmblaCarouselType } from 'embla-carousel-solid'
import createEmblaCarousel from 'embla-carousel-solid'

import type { Accessor, ComponentProps, ParentComponent, VoidComponent } from 'solid-js'
import { createContext, createEffect, createMemo, createSignal, mergeProps, splitProps, useContext } from 'solid-js'
import { Button } from './button'

export type CarouselApi = CreateEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof createEmblaCarousel>
type CarouselOptions = NonNullable<UseCarouselParameters[0]>
type CarouselPlugin = NonNullable<UseCarouselParameters[1]>

type CarouselProps = {
    opts?: ReturnType<CarouselOptions>
    plugins?: ReturnType<CarouselPlugin>
    orientation?: 'horizontal' | 'vertical'
    setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
    carouselRef: ReturnType<typeof createEmblaCarousel>[0]
    api: ReturnType<typeof createEmblaCarousel>[1]
    scrollPrev: () => void
    scrollNext: () => void
    canScrollPrev: Accessor<boolean>
    canScrollNext: Accessor<boolean>
} & CarouselProps

const CarouselContext = createContext<Accessor<CarouselContextProps> | null>(null)

const useCarousel = () => {
    const context = useContext(CarouselContext)

    if (!context) {
        throw new Error('useCarousel must be used within a <Carousel />')
    }

    return context()
}

export const Carousel: ParentComponent<ComponentProps<'div'> & CarouselProps> = (props) => {
    const merge = mergeProps({ orientation: 'horizontal' } as CarouselProps, props)
    const [local, rest] = splitProps(merge, ['orientation', 'opts', 'setApi', 'plugins', 'class', 'children'])

    const [carouselRef, api] = createEmblaCarousel(
        () => ({
            ...local.opts,
            axis: local.orientation === 'horizontal' ? 'x' : 'y',
        }),
        () => (local.plugins === undefined ? [] : local.plugins),
    )
    const [canScrollPrev, setCanScrollPrev] = createSignal(false)
    const [canScrollNext, setCanScrollNext] = createSignal(false)

    const onSelect = (api: NonNullable<ReturnType<CarouselApi>>) => {
        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
    }

    const scrollPrev = () => {
        api()?.scrollPrev()
    }

    const scrollNext = () => {
        api()?.scrollNext()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            scrollPrev()
        } else if (event.key === 'ArrowRight') {
            event.preventDefault()
            scrollNext()
        }
    }

    createEffect(() => {
        if (!api() || !local.setApi) {
            return
        }

        local.setApi(api)
    })

    createEffect(() => {
        if (!api()) {
            return
        }

        onSelect(api()!)
        api()!.on('reInit', onSelect)
        api()!.on('select', onSelect)

        return () => {
            api()?.off('select', onSelect)
        }
    })

    const value = createMemo(
        () =>
            ({
                carouselRef,
                api,
                opts: local.opts,
                orientation: local.orientation || (local.opts?.axis === 'y' ? 'vertical' : 'horizontal'),
                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext,
            }) satisfies CarouselContextProps,
    )

    return (
        <CarouselContext.Provider value={value}>
            <div
                onKeyDown={handleKeyDown}
                class={cn('relative', local.class)}
                role="region"
                aria-roledescription="carousel"
                {...rest}
            >
                {local.children}
            </div>
        </CarouselContext.Provider>
    )
}

export const CarouselContent: ParentComponent<ComponentProps<'div'>> = (props) => {
    const [local, rest] = splitProps(props, ['class'])
    const { carouselRef, orientation } = useCarousel()

    return (
        <div ref={carouselRef} class="overflow-hidden">
            <div class={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', local.class)} {...rest} />
        </div>
    )
}

export const CarouselItem: ParentComponent<ComponentProps<'div'>> = (props) => {
    const [local, rest] = splitProps(props, ['class'])
    const { orientation } = useCarousel()

    return (
        <div
            role="group"
            aria-roledescription="slide"
            class={cn(
                'min-w-0 shrink-0 grow-0 basis-full',
                orientation === 'horizontal' ? 'pl-4' : 'pt-4',
                local.class,
            )}
            {...rest}
        />
    )
}

export const CarouselPrevious: VoidComponent<ComponentProps<typeof Button>> = (props) => {
    const merge = mergeProps({ variant: 'outline', size: 'icon' } as ComponentProps<typeof Button>, props)
    const [local, rest] = splitProps(merge, ['class', 'variant', 'size'])
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
        <Button
            variant={local.variant}
            size={local.size}
            class={cn(
                'absolute  h-8 w-8 rounded-full',
                orientation === 'horizontal'
                    ? '-left-12 top-1/2 -translate-y-1/2'
                    : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
                local.class,
            )}
            disabled={!canScrollPrev()}
            onClick={scrollPrev}
            {...rest}
        >
            <span class="icon-[tabler--arrow-left] h-4 w-4" />
            <span class="sr-only">Previous slide</span>
        </Button>
    )
}

export const CarouselNext: VoidComponent<ComponentProps<typeof Button>> = (props) => {
    const merge = mergeProps({ variant: 'outline', size: 'icon' } as ComponentProps<typeof Button>, props)
    const [local, rest] = splitProps(merge, ['class', 'variant', 'size'])
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
        <Button
            variant={local.variant}
            size={local.size}
            class={cn(
                'absolute h-8 w-8 rounded-full',
                orientation === 'horizontal'
                    ? '-right-12 top-1/2 -translate-y-1/2'
                    : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
                local.class,
            )}
            disabled={!canScrollNext()}
            onClick={scrollNext}
            {...rest}
        >
            <span class="icon-[tabler--arrow-right] h-4 w-4" />
            <span class="sr-only">Next slide</span>
        </Button>
    )
}
