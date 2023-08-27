export const fadeInLeft = ({ initial, duration = 1, delay = 0 }) => ({
    initial: { x: initial, opacity: 0 },
    whileInView: { x: 0, opacity: 1, transition: { duration: duration, delay: delay } }
})
