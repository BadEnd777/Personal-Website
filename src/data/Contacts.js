import { FaGithub, FaInstagram, FaHome } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Contacts = [
    {
        icon: MdEmail,
        open: 'mailto:badend23@hotmail.com',
        text: 'Email',
        type: 'email'
    },
    {
        icon: AiFillPhone,
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
        icon: FaInstagram,
        href: 'https://www.instagram.com/pyyupsk_/',
        text: 'Instagram',
        type: 'instagram'
    },
    {
        icon: FaHome,
        text: 'Samut Sakhon, Thailand',
        type: 'location'
    }
]

export default Contacts
