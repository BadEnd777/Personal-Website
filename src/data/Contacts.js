import { FaMailBulk, FaPhone, FaGithub, FaHome } from 'react-icons/fa'
import { FaThreads } from 'react-icons/fa6'

const Contacts = [
    {
        icon: FaMailBulk,
        href: 'mailto:badend777@proton.me',
        text: 'Email',
        type: 'email'
    },
    {
        icon: FaPhone,
        href: 'tel:+66953351342',
        text: 'Phone',
        type: 'phone'
    },
    {
        icon: FaGithub,
        href: 'https://github.com/BadEnd777',
        text: 'Github',
        type: 'github'
    },
    {
        icon: FaThreads,
        href: 'https://www.threads.net/@pyyupsk_',
        text: 'Threads',
        type: 'threads'
    },
    {
        icon: FaHome,
        text: 'Samut Sakhon, Thailand',
        type: 'location'
    }
]

export default Contacts
