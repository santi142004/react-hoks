import React, { useState } from 'react';

export const InputText = () => {
  const [text, setText] = useState('');
  const [color, setColor]= useState('text-black')

  const handleText= (e) =>{ 
    if (e.keyCode===13) {
      setText(e.target.value)
      setColor('text-green-500')
    }else{
      setColor('text-black')
    }
  }

  return (
    <>
      <p 
      className={color} 
      onKeyUp={handleText}
      >Texto ingresado: {text}
      </p>
      <input
        placeholder='Ingresa el texto'
        className='w-96 bg-sky-300 p-2'
        type="text"
        onKeyUp={handleText}
      />    
    </>
    
  );
}
