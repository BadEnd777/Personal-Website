export const fadeInDown = ({ initial = 0, ...props }) => {
    return {
        initial: {
            y: -initial,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 1
        },
        ...props
    }
}
