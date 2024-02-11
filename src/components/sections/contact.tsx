import { Typography } from '@/components/typography'
import { contact } from '@/data'
import Image from 'next/image'

export const Contact = () => {
    return (
        <section className="flex flex-col space-y-8 pb-20 pt-4">
            <Typography variant="h2" underline>
                📫 Let&apos;s Connect
            </Typography>
            <div className="flex flex-col space-y-12">
                <p className="text-center text-xl text-muted-foreground lg:text-left">
                    Feel free to contact me if you have any questions or just want to say hi!
                </p>
                <div className="flex flex-col items-center space-y-4">
                    <Image
                        src="/images/profile.webp"
                        alt="Profile"
                        width={400}
                        height={400}
                        className="size-[300px] rounded-full md:size-[400px]"
                        priority
                    />
                    <Typography variant="h1">Contact Information</Typography>
                    <div className="flex space-x-4">
                        {contact.map((item) => (
                            <a
                                key={item.link}
                                href={item.link}
                                className="group flex items-center space-x-2 text-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                            >
                                <span className={`${item.icon} size-6`} />
                                <p className="transition-colors group-hover:underline">{item.label}</p>
                            </a>
                        ))}
                    </div>
                    <p className="text-lg text-primary">I look forward to hearing from you!</p>
                </div>
            </div>
        </section>
    )
}
