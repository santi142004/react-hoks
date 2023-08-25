import React, { useState } from 'react';

export const DarkAndLigth = () => {
  const [isOn, setIsOn] = useState(false);
  const[color, setColor]= useState('bg-black')
  const [colorText, setColorText]= useState('text-white')

const changeColor= ()=>{
setIsOn(!isOn)
  if (!isOn) {
    setColor('bg-white')
    setColorText('text-black')
  }else{
    setColor('bg-black')
    setColorText('text-white')
  }
}


  return (
    <main className={` ${color} w-screen h-screen`}>    
      <p className={`${colorText} ${color}`} >Estado: {isOn ? 'Encendido' : 'Apagado'}</p>
      <button className={colorText} 
      onClick={changeColor}>Toggle</button>
    </main>    
  );
}
