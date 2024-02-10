'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { skills } from '@/data'

export const SkillsCarousel = () => {
    const plugin = useRef(Autoplay({ delay: 5000, stopOnHover: true }))

    return (
        <Carousel opts={{ align: 'start', loop: true }} plugins={[plugin.current]}>
            <CarouselContent className="-ml-1">
                {skills.map((skill) => (
                    <CarouselItem key={skill.title} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardHeader>
                                    <CardTitle>{skill.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{skill.description}</CardDescription>
                                </CardContent>
                                <CardFooter>
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
