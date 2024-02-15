/* 
title: 'Project Title' - The title of the project.
description: 'Project description.' - The description of the project.
image: '/images/projects/project-image.webp' - The path to the project image.
status: {
    text: 'Status' - The status of the project. (e.g. View Source, Coming Soon, Private Repository)
    link: 'Link' - The link to the project status. (e.g. GitHub Repository, Website)
    icon: 'icon-class' - The icon for the status. https://icon-sets.iconify.design/tabler/?query=mail&prefixes=tabler
}
note: 'Note' - A note for the project. (e.g. In development, Coming Soon)
isFeatured: true - Show the project in the featured section.
isFullWidth: true - Make the project image full width.
*/

export const projects = [
    {
        title: 'Personal Website',
        description: 'My personal website built with Next.js, TypeScript, shadcn/ui, and Tailwind CSS.',
        image: '/images/projects/personal-website.webp',
        status: {
            text: 'View Source',
            link: 'https://github.com/BadEnd777/Personal-Website',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
        isFullWidth: true,
    },
    {
        title: 'Chat Bridge',
        description:
            'An npm package that makes it easier to integrate Facebook Page webhook into your Node.js application.',
        image: '/images/projects/chat-bridge.webp',
        status: {
            text: 'View Source',
            link: 'https://github.com/BadEnd777/Chat-Bridge',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
    },
    {
        title: 'guard-env',
        description:
            'Node.js module for type-checking and guarding environment variables based on specified configurations.',
        image: '/images/projects/guard-env.webp',
        status: {
            text: 'View Source',
            link: 'https://github.com/BadEnd777/guard-env',
            icon: 'icon-[tabler--arrow-right]',
        },
        note: 'In development',
        isFeatured: true,
    },
    {
        title: 'VRConnectivity Shield',
        description: 'DNS blocking tool to prevent VRChat analytics and tracking.',
        image: '/images/projects/vrconnectivity-shield.webp',
        status: {
            text: 'View Source',
            link: 'https://github.com/BadEnd777/VRConnectivity-Shield',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
    },
    {
        title: 'TikTok Harbor',
        description: 'Free online tool to download TikTok videos/slideshows without watermark.',
        image: '/images/projects/tiktok-harbor.webp',
        status: {
            text: 'View Source',
            link: 'https://github.com/BadEnd777/TikTok-Harbor',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
    },
]
