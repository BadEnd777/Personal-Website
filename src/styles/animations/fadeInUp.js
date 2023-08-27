export const fadeInUp = ({ initial, duration = 1, delay = 0 }) => ({
    initial: { y: initial, opacity: 0 },
    whileInView: { y: 0, opacity: 1, transition: { duration: duration, delay: delay } }
})
