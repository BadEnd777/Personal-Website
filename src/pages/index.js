import { Layout } from '@/Layout'
import { Hero } from '@/Components/Sections/Home/Hero'
import { Skills } from '@/Components/Sections/Home/Skills'
import { Resume } from '@/Components/Sections/Home/Resume'
import { Contact } from '@/Components/Sections/Home/Contact'

const HomePages = () => {
    return (
        <Layout>
            <Hero />
            <Skills />
            <Resume />
            <Contact />
        </Layout>
    )
}

export default HomePages
