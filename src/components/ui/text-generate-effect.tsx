'use client'

import { cn } from '@/lib/utils'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
    const [scope, animate] = useAnimate()
    let wordsArray = words.split(' ')
    useEffect(() => {
        animate(
            'span',
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            },
        )
    }, [scope.current])

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span key={word + idx} className="opacity-0">
                            {word}{' '}
                        </motion.span>
                    )
                })}
            </motion.div>
        )
    }

    return <div className={className}>{renderWords()}</div>
}
