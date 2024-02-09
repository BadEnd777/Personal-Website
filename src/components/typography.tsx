import { Component } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'

interface TypographyProps {
    variant: keyof typeof variants
    underline?: boolean
    classes?: string
    children: JSX.Element
}

const variants = {
    h1: 'text-3xl font-extrabold lg:text-4xl',
    h2: 'text-2xl font-semibold lg:text-3xl',
    h3: 'text-xl font-semibold lg:text-2xl',
    h4: 'text-lg font-medium lg:text-xl',
    h5: 'text-base font-medium lg:text-lg',
    h6: 'text-sm font-medium lg:text-base',
}

export const Typography: Component<TypographyProps> = (props) => {
    const { variant, underline, classes, children } = props as TypographyProps

    const isUnderlined = underline ? 'border-b pb-4' : ''

    const combinedClasses = `scroll-m-20 tracking-tight ${variants[variant]} ${isUnderlined} ${classes || ''}`

    const component = {
        h1: <h1 class={combinedClasses}>{children}</h1>,
        h2: <h2 class={combinedClasses}>{children}</h2>,
        h3: <h3 class={combinedClasses}>{children}</h3>,
        h4: <h4 class={combinedClasses}>{children}</h4>,
        h5: <h5 class={combinedClasses}>{children}</h5>,
        h6: <h6 class={combinedClasses}>{children}</h6>,
    }

    return component[variant]
}
