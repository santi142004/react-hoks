import { Counter } from "./components/01-Counter/Counter"
import { InputText } from "./components/02-InputText/InputText"
import { ToogleState } from './components/03-ToogleState/ToogleState'
import { Change } from "./components/Change/Change"
import { DarkAndLigth } from "./components/DarkAndLight/DarkAndLigth"
import { Game } from "./components/Game/Game"
import { TodoList } from "./components/TodoList/TodoList"


function App() {
  
  return (
    <div className=' bg-zinc-700 flex flex-col justify-center items-center'>
      {/* <Counter /> */}
       {/* <InputText /> */}
      {/* <ToogleState />  */}
      {/* <DarkAndLigth /> */}
      {/* <TodoList/> */}
      {/* <Change /> */}
      <Game />
    </div>
  )
}

export default App
