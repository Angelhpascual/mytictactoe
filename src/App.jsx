import React, { useState } from "react"
import Square from "./components/Square"
import { TURNS, WINNER_COMBOS } from "./constants"
import confetti from "canvas-confetti"

const WinnerModal = ({ winner }) => {
  if (winner === null) return null
  return (
    <div className="bg-indigo-800 p-4 rounded-lg mt-6">
      <p className="text-2xl text-indigo-200">
        {winner === false ? "It's a tie" : `${winner} wins!`}
      </p>
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    if (board[index]) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)
    const winner = checkWinner(newBoard)
    if (winner) {
      confetti()
      setWinner(winner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  return (
    <div className="h-screen bg-indigo-500 flex flex-col justify-center items-center">
      <p className="text-xl font-bold text-indigo-200 mb-8 border-2 border-indigo-200 py-2 px-4">
        TIC TAC TOE
      </p>
      <div className="grid grid-cols-3 gap-2 p-2">
        {board.map((square, index) => (
          <div>
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4 gap-2 text-2xl text-white">
        <div
          className={`${
            TURNS.X === turn ? "bg-indigo-800" : "bg-indigo-600"
          } py-2 px-4 cursor-pointer`}
        >
          {TURNS.X}
        </div>
        <div
          className={`${
            TURNS.O === turn ? "bg-indigo-800" : "bg-indigo-600"
          } py-2 px-4 cursor-pointer`}
        >
          {TURNS.O}
        </div>
      </div>
      {winner !== null && <WinnerModal winner={winner} />}
      <button
        onClick={() => {
          resetBoard()
        }}
        className="bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold py-2 px-4 rounded inline-flex items-center mt-8"
      >
        <span>Reset</span>
      </button>
      <footer className="mt-8">
        <p className="text-indigo-100 text-sm">
          Developed by <span className="underline">angelhpascual</span>
        </p>
      </footer>
    </div>
  )
}

export default App
