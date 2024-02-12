'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { skills } from '@/data'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

export const SkillsCarousel = () => {
    const plugin = useRef(Autoplay({ delay: 3000, stopOnHover: true }))

    return (
        <Carousel opts={{ align: 'start', loop: true }} plugins={[plugin.current]}>
            <CarouselContent className="-ml-1">
                {skills.map((skill) => (
                    <CarouselItem key={skill.title} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="h-full p-1">
                            <Card className="flex h-full flex-col">
                                <CardHeader>
                                    <CardTitle>{skill.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{skill.description}</CardDescription>
                                </CardContent>
                                <CardFooter className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((item) => (
                                            <span key={item.name} className={`${item.icon} size-6`} />
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
