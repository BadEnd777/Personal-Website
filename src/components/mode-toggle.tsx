import { Button } from '@/components/ui/button'
import { useColorMode } from '@kobalte/core'
import { MoonIcon, SunIcon } from '@/components/icons'

export const ModeToggle = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <Button onClick={toggleColorMode} variant="ghost" size="icon" aria-label="Toggle color mode">
            <SunIcon class="dark:hidden" />
            <MoonIcon class="hidden dark:block" />
        </Button>
    )
}
