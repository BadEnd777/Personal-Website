export const capitalize = (str: string) => {
    const words = str.split('-')
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    return capitalizedWords.join(' ')
}
