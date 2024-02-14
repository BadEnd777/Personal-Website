import { contact } from '@/data'
import NextLink from 'next/link'

export const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <footer className="w-full border-t bg-background">
            <div className="container flex h-full flex-col items-center justify-between space-y-2 py-4 md:flex-row md:space-y-0">
                <div className="flex flex-col items-center space-y-2 md:items-start">
                    <p>&copy; {date} BadEnd, All Rights Reserved</p>
                    <p>
                        This website is open source.{' '}
                        <NextLink
                            href="https://github.com/BadEnd777/Portfolio-Website"
                            target="_blank"
                            className="link"
                            aria-label="GitHub repository"
                        >
                            View on GitHub
                        </NextLink>
                    </p>
                </div>
                <div className="flex space-x-4">
                    {contact.map((item) => (
                        <NextLink
                            key={item.link}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                        >
                            <span className={`${item.icon} size-6`} />
                        </NextLink>
                    ))}
                </div>
            </div>
        </footer>
    )
}
