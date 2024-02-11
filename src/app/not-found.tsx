import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import NextLink from 'next/link'

const NotFound = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-4">
            <Image src="/icons/disappointed-face.webp" alt="Disappointed face" width={48} height={48} />
            <Typography variant="h1">Oops, page not found!</Typography>
            <p className="max-w-2xl text-center text-xl text-muted-foreground">
                We apologize for any inconvenience caused. It seems that you are trying to access a page that has either
                been deleted or never existed.
            </p>
            <NextLink href="/" aria-label="Back to home">
                <Button size="lg" className="mt-4 uppercase" aria-label="Back to home">
                    Back to home
                </Button>
            </NextLink>
        </div>
    )
}

export default NotFound
