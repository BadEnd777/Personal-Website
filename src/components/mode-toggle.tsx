import { Button } from '@/components/ui/button'
import { useColorMode } from '@kobalte/core'

export const ModeToggle = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <Button onClick={toggleColorMode} variant="ghost" size="icon" aria-label="Toggle color mode">
            <span class="icon-[tabler--sun] block size-5 dark:hidden" />
            <span class="icon-[tabler--moon-stars] hidden size-5 dark:block" />
        </Button>
    )
}
