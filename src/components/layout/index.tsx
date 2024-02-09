import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { JSX } from 'solid-js'

export const Layout = (props: {
    class?: string
    children: number | boolean | Node | JSX.ArrayElement | JSX.Element | JSX.Element[]
}) => {
    return (
        <div class="flex h-screen max-w-[100vw] flex-col overflow-x-hidden">
            <Header />
            <main id="main" class={`container mt-[80px] flex-1 ${props.class}`}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}
