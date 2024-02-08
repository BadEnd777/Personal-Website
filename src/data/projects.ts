import { ArrowRight } from '@/components/icons/ArrowRight'

export const projects = [
    {
        title: 'Personal Website',
        description: 'My personal website built with Next.js and Chakra UI.',
        image: '/projects/personal-website.jpg',
        status: {
            text: 'View Source',
            link: 'https://github.com/BadEnd777/Personal-Website',
            icon: ArrowRight,
        },
        isFullWidth: true,
    },
    {
        title: 'Chat Bridge',
        description:
            'An npm package that makes it easier to integrate Facebook Page webhook into your Node.js application.',
        image: '/projects/chat-bridge.jpg',
        status: {
            text: 'View Source',
            link: 'https://github.com/BadEnd777/Chat-Bridge',
            icon: ArrowRight,
        },
    },
    {
        title: 'VRConnectivity Shield',
        description: 'DNS blocking tool to prevent VRChat analytics and tracking.',
        image: '/projects/vrconnectivity-shield.jpg',
        status: {
            text: 'View Source',
            link: 'https://github.com/BadEnd777/VRConnectivity-Shield',
            icon: ArrowRight,
        },
    },
    {
        title: 'TikTok Harbor',
        description: 'Free online tool to download TikTok videos/slideshows without watermark.',
        image: '/projects/tiktok-harbor.jpg',
        status: {
            text: 'View Source',
            link: 'https://github.com/BadEnd777/TikTok-Harbor',
            icon: ArrowRight,
        },
        isFullWidth: true,
    },
]
