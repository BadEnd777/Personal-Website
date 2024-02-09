import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { A } from '@solidjs/router'

const NotFound = () => {
    return (
        <div class="flex h-screen flex-col items-center justify-center space-y-4">
            <img src="/icons/disappointed-face.png" alt="Disappointed face" class="size-12" />
            <Typography variant="h1">Oops, page not found!</Typography>
            <p class="max-w-2xl text-center text-xl text-muted-foreground">
                We apologize for any inconvenience caused. It seems that you are trying to access a page that has either
                been deleted or never existed.
            </p>
            <A href="/">
                <Button size="lg" class="mt-4 uppercase">
                    Back to home
                </Button>
            </A>
        </div>
    )
}

export default NotFound
