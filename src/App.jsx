import React, { useState } from "react"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  return (
    <div className="h-screen bg-indigo-500 flex flex-col justify-center items-center">
      <p className="text-xl font-bold text-indigo-200 mb-8 border-2 border-indigo-200 py-2 px-4">
        TIC TAC TOE
      </p>
      <div className="grid grid-cols-3 gap-2 p-2">
        {board.map((value, index) => {
          return (
            <div className="w-16 h-16 border-2 bg-indigo-600" key={index}>
              {value}
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center mt-4 gap-2 text-2xl text-white">
        <div className="bg-indigo-600 py-2 px-4 cursor-pointer">X</div>
        <div className="bg-indigo-600 py-2 px-4 cursor-pointer">O</div>
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
