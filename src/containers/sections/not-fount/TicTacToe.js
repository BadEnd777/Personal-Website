// Importing necessary components and libraries
import { VStack, Text, Flex, IconButton, Tooltip, HStack, useToast } from '@chakra-ui/react'
import { Board } from '@/components/tictactoe/Board'
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
            if (winner || squares[i]) return
            const newSquares = [...squares]
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

    // Define a function to check if the game board is full
    const isBoardFull = board => {
        return board.every(square => square !== null)
    }

    // Define the minimax algorithm for the AI player
    const minimax = useCallback((board, depth, isMaximizingPlayer) => {
        // Check if there's a winner and return a score accordingly
        const winner = calculateWinner(board)
        if (winner === 'X') {
            return -1
        } else if (winner === 'O') {
            return 1
        } else if (isBoardFull(board)) {
            return 0
        }

        if (isMaximizingPlayer) {
            // Maximize the score for the AI player
            let maxScore = -Infinity
            for (let i = 0; i < board.length; i++) {
                if (board[i] === null) {
                    board[i] = 'O'
                    const score = minimax(board, depth + 1, false)
                    board[i] = null
                    maxScore = Math.max(maxScore, score)
                }
            }
            return maxScore
        } else {
            // Minimize the score for the human player
            let minScore = Infinity
            for (let i = 0; i < board.length; i++) {
                if (board[i] === null) {
                    board[i] = 'X'
                    const score = minimax(board, depth + 1, true)
                    board[i] = null
                    minScore = Math.min(minScore, score)
                }
            }
            return minScore
        }
    }, [])

    // Define a function to make the AI's move
    const makeAiMove = useCallback(() => {
        const boardCopy = [...squares]
        let bestMove = -1
        let bestScore = -Infinity

        for (let i = 0; i < boardCopy.length; i++) {
            if (boardCopy[i] === null) {
                boardCopy[i] = 'O'
                const score = minimax(boardCopy, 0, false)
                boardCopy[i] = null

                if (score > bestScore) {
                    bestScore = score
                    bestMove = i
                }
            }
        }

        if (bestMove !== -1) {
            handleClick(bestMove)
        }
    }, [handleClick, minimax, squares])

    // Use useEffect to update the game status and handle AI moves
    useEffect(() => {
        if (winner) {
            setStatus(`Winner: ${winner}`)
            toast({
                title: winner === 'X' ? 'You Win!' : 'You Lose haha :)',
                status: winner === 'X' ? 'success' : 'error'
            })
        } else if (squares.every(square => square !== null)) {
            setStatus('Draw')
            toast({
                title: 'Show me what you got!',
                status: 'info'
            })
        } else {
            setStatus(`Next Player: ${xIsNext ? 'X' : 'O'}`)
            if (!xIsNext) makeAiMove() // Make AI move if it's not the human's turn
        }
    }, [makeAiMove, squares, toast, winner, xIsNext])

    // Render the game components using Chakra UI
    return (
        <Flex justify="center" w={{ base: '100%', lg: '50%' }} align="center">
            <VStack spacing="4" align="flex-start">
                <Flex
                    align="center"
                    justify="center"
                    w="100%"
                    bg="surface0"
                    border="1px solid"
                    borderColor="surface1"
                    rounded="md"
                    p="2"
                >
                    <Text fontSize="xl">{status}</Text>
                </Flex>
                <Board squares={squares} onClick={handleClick} />
                <HStack spacing="4">
                    <Text>Reset Game</Text>
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
