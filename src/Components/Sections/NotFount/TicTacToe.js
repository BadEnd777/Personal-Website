// Importing necessary components and libraries
import { VStack, Text, Flex, IconButton, Tooltip, HStack, useToast } from '@chakra-ui/react'
import { Board } from '@/Components/TicTacToe/Board'
import { GrPowerReset } from 'react-icons/gr'
import { useEffect, useState, useCallback } from 'react'
import { calculateWinner } from '@/utils/tictactoe'

// Defining the TicTacToe component
export const TicTacToe = () => {
    // Toast hook to display a toast notification
    const toast = useToast()

    // State variables for the Tic Tac Toe game
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [status, setStatus] = useState('')
    const winner = calculateWinner(squares)

    // Function to handle a player's move
    const handleClick = useCallback(
        i => {
            const newSquares = [...squares]
            if (winner || newSquares[i]) return
            newSquares[i] = xIsNext ? 'X' : 'O'
            setSquares(newSquares)
            setXIsNext(!xIsNext)
        },
        [squares, winner, xIsNext]
    )

    // Function to reset the game
    const handleReset = useCallback(() => {
        setSquares(Array(9).fill(null))
        setXIsNext(true)
    }, [])

    // Function to make the AI's move
    const makeAiMove = useCallback(() => {
        const newSquares = [...squares]
        if (winner) return
        const emptySquares = newSquares.reduce((acc, curr, i) => {
            if (curr === null) acc.push(i)
            return acc
        }, [])
        const randomIndex = Math.floor(Math.random() * emptySquares.length)
        const randomSquare = emptySquares[randomIndex]
        newSquares[randomSquare] = xIsNext ? 'X' : 'O'
        setSquares(newSquares)
        setXIsNext(!xIsNext)
    }, [squares, winner, xIsNext])

    // useEffect to update game status and check for a winner/draw
    useEffect(() => {
        if (winner) {
            setStatus(`Winner: ${winner}`)
            toast({
                title: `Winner: ${winner}`,
                status: 'success'
            })
        } else if (squares.every(square => square !== null)) {
            setStatus('Draw')
            toast({
                title: 'Draw',
                status: 'info'
            })
        } else {
            setStatus(`Next Player: ${xIsNext ? 'X' : 'O'}`)
            if (!xIsNext) makeAiMove()
        }
    }, [makeAiMove, squares, toast, winner, xIsNext])

    return (
        <Flex justify="center" w="50%">
            <VStack spacing="4" align="flex-start">
                {/* Status of the game */}
                <Flex
                    align="center"
                    justify="center"
                    w="100%"
                    bg="surface0"
                    border="1px solid"
                    borderColor="surface1"
                    rounded="md"
                    p="4"
                >
                    <Text fontSize="xl">{status}</Text>
                </Flex>
                {/* Board component to render the Tic Tac Toe board */}
                <Board squares={squares} onClick={handleClick} />
                <HStack spacing="4">
                    <Text>Reset Game</Text>
                    {/* Tooltip for the reset button */}
                    <Tooltip label="Reset Game" aria-label="Reset Game">
                        <IconButton
                            alignSelf="flex-end"
                            icon={<GrPowerReset />}
                            onClick={handleReset}
                        />
                    </Tooltip>
                </HStack>
            </VStack>
        </Flex>
    )
}
