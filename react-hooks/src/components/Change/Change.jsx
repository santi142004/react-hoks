import React, { useState, useEffect } from 'react'

export const Change = () => {

  const colorA= 'text-red-500 text-4xl'
  const colorB = 'text-green-500 text-4xl'

  const [count, setCount] = useState(0);
  const [color, setColor]= useState(colorA)

  useEffect(() => {
    if (count >=10) {
      setColor(colorB)
    }else{
      setColor( colorA)
    }
  }, [count])
  

  const handleSum=  () => setCount(count + 1)
  const handleMinus= () => setCount(count -1)
  const handleReset= ()=> setCount(0)

  return (
    <>
      <p className={`${color} `}>Contador: {`${count}`}</p>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handleSum}>Incrementar</button>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handleMinus}>Decrementar</button>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handleReset}>resetear</button>    
    </>
  )
}
