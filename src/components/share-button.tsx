'use client'

import { Button } from '@/components/ui/button'
import { RWebShare } from 'react-web-share'

export const ShareButton = ({ title, text, url }: { title: string; text: string; url: string }) => {
    return (
        <RWebShare
            data={{
                text: text,
                title: title,
                url: url,
            }}
        >
            <Button variant="secondary" className="gap-1">
                <p>Share</p>
                <span className="icon-[tabler--link] size-5" />
            </Button>
        </RWebShare>
    )
}
