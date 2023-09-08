// Import necessary packages and component
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// Define the useResetPosition hook
export const useResetPosition = () => {
    const router = useRouter()

    // Add an event listener to scroll to the top on route change
    useEffect(() => {
        const handleRouteChange = () => {
            document.getElementById('top').scrollIntoView({ behavior: 'smooth' })
        }

        // Attach the event listener to the 'routeChangeComplete' event
        router.events.on('routeChangeComplete', handleRouteChange)

        // Remove the event listener when the component unmounts
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])
}
