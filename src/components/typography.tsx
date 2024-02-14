import { HTMLAttributes, ReactNode } from 'react'

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    underline?: boolean
    classes?: string
    children: ReactNode
}

const variants = {
    h1: 'text-2xl font-semibold leading-none tracking-tight',
    h2: 'text-xl font-semibold leading-none tracking-tight',
    h3: 'font-semibold leading-none tracking-tight',
    h4: 'text-lg font-semibold leading-none tracking-tight',
    h5: 'text-base font-semibold leading-none tracking-tight',
    h6: 'text-sm font-semibold leading-none tracking-tight',
}

export const Typography = ({ variant, underline, classes, children }: TypographyProps) => {
    const isUnderlined = underline ? 'border-b pb-4' : ''

    const combinedClasses = `scroll-m-20 tracking-tight ${variants[variant]} ${isUnderlined} ${classes || ''}`

    const component = {
        h1: <h1 className={combinedClasses}>{children}</h1>,
        h2: <h2 className={combinedClasses}>{children}</h2>,
        h3: <h3 className={combinedClasses}>{children}</h3>,
        h4: <h4 className={combinedClasses}>{children}</h4>,
        h5: <h5 className={combinedClasses}>{children}</h5>,
        h6: <h6 className={combinedClasses}>{children}</h6>,
    }

    return component[variant]
}
