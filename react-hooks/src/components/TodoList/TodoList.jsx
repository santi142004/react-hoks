
import React from 'react'
import { useState, useRef } from 'react'
import { Li } from '../Li/Li'



export const TodoList = () => {
  let info=[]
  const TA = useRef('ss')
  const[array, setarray]= useState([])

const click= () =>{
  info= [...info,TA.current.value]
  setarray(info)
}



  return (
    <main className=' bg-slate-500 w-full flex flex-col items-center justify-center'>
    <h3>Lista de tareas</h3>
    <textarea className='w-96' ref={TA} name="" id="" cols="30" rows="10"></textarea>
    <button className= ' border-red-600 border-2 py-2 my-2' onClick={click}>Crear Tarea</button>
    {array.map(element => <Li text={element}/>)}
    </main>
  )
}
