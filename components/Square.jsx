const Square = ({ children, index, updateBoard }) => {
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div
      onClick={handleClick}
      className="w-16 h-16 border-2 bg-indigo-600 flex justify-center items-center text-indigo-200 text-xl"
      key={index}
    >
      {children}
    </div>
  )
}

export default Square
