import React from 'react'
import TodoApp from './07-useReducer/TodoApp'
import CounterApp from "./01-useState/CounterApp"
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook"
import FromWithCustomHook from "./02-useEffect/FormWithCustomHook"
import SimpleForm from "./02-useEffect/SimpleForm"
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks"
import FocusScreen from "./04-useRef/FocusScreen"
import RealExapleRef from "./04-useRef/RealExapleRef"
import Layout from "./05-useLayoutDefect/Layout"
import CallBackHook from "./06-Memos/CallBackHook"
import MemoHook from "./06-Memos/MemoHook"
import Memorize from "./06-Memos/Memorize"
import MainApp from './08-useContext/MainApp'

const HookApp = () => {
  return (
    <div>
      <MainApp/>
      <hr/>
      <TodoApp/>
      <hr/>
      <CounterApp/>
      <CounterWithCustomHook/>
      <hr/>
      <SimpleForm/>
      <FromWithCustomHook/>
      <hr/>
      <hr/>
      <MultipleCustomHooks/>
      <hr/>
      <FocusScreen/>
      <hr/>
      <RealExapleRef/>
      <hr/>
      <Layout/>
      <hr/>
      <Memorize/>
      <hr/>
      <MemoHook/>
      <hr/>
      <CallBackHook/>
      <hr/>

    </div>
  )
}

export default HookApp