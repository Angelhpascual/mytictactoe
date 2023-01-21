import React, { useState } from "react"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  return (
    <div className="h-screen bg-indigo-500 flex flex-col justify-center items-center">
      <div className="text-xl font-bold text-indigo-100 mb-8">TIC TAC TOE</div>
      <div className="grid grid-cols-3 gap-2 p-2">
        {board.map((value, index) => {
          return (
            <div className="w-16 h-16 border-2 bg-indigo-600" key={index}>
              {value}
            </div>
          )
        })}
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
