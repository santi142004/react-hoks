import React, { useState, useEffect } from 'react'


export const Game = () => {

  const [changeCpu, setChangeCpu]= useState('esperando')
  const [change, setChange]= useState('esperando')
  const [result, setResult]= useState('')

  useEffect(() => {
    let numero = Math.floor(Math.random()* 3)+1
    if (numero ===1) {
      setChangeCpu('tijera')
    }else if(numero===2){
      setChangeCpu('piedra')
    }else if(numero===3){
      setChangeCpu('papel')
    }else{
      setChangeCpu('esperando')
    }
  
  }, [change])
  

  return (
    <>
      <p className='text-4xl text-white'>Game:</p>
      <div className='flex'>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4'>pierda</button>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4'>papel</button>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4'>tijera</button>    
      </div>
      <div className='flex justify-between w-96'>
      <p>TU: {`${change}`}</p>
      <p>CPU: {`${changeCpu}`} </p>
      </div><br /><br />
      <p>{`${result}`}</p>
    </>
  )
}
