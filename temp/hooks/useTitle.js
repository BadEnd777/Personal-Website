// Importing useEffect hook from react
import { useEffect } from 'react'

// Defining the useTitle hook
export const useTitle = title => {
    // useEffect is used to update the document title
    useEffect(() => {
        document.title = title
    }, [title]) // The effect runs whenever the 'title' prop changes
}
