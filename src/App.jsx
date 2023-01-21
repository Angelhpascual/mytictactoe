import React, { useState } from "react"
import Square from "../components/Square"
import { TURNS } from "./constants"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    console.log(newBoard)
    setBoard(newBoard)
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)
    console.log(turn)
  }

  return (
    <div className="h-screen bg-indigo-500 flex flex-col justify-center items-center">
      <p className="text-xl font-bold text-indigo-200 mb-8 border-2 border-indigo-200 py-2 px-4">
        TIC TAC TOE
      </p>
      <div className="grid grid-cols-3 gap-2 p-2">
        {board.map((value, index) => {
          return (
            <Square updateBoard={updateBoard} index={index} key={index}>
              {value}
            </Square>
          )
        })}
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
      <footer className="mt-8">
        <p className="text-indigo-100 text-sm">
          Developed by <span className="underline">angelhpascual</span>
        </p>
      </footer>
    </div>
  )
}

export default App
