// Importing necessary components
import { Grid, GridItem } from '@chakra-ui/react'
import { Square } from '@/components/tictactoe/Square'

// Defining the Board component
export const Board = ({ squares, onClick }) => (
    <Grid
        templateColumns="repeat(3, 1fr)"
        bg="surface0"
        border="1px solid"
        borderColor="surface1"
        rounded="md"
    >
        {/* Mapping over the squares array to render Square components */}
        {squares.map((square, index) => (
            <GridItem key={index}>
                {/* Rendering the Square component */}
                <Square value={square} onClick={() => onClick(index)} />
            </GridItem>
        ))}
    </Grid>
)
