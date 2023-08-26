// Define a function named 'capitalize' that takes a single argument 'str'
export const capitalize = str => {
    // Split the input string into an array of words using '-' as the delimiter
    const words = str.split('-')

    // Use the 'map' function to iterate through each word in the array
    // and capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))

    // Join the capitalized words back into a single string with spaces in between
    return capitalizedWords.join(' ')
}
