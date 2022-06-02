import CounterApp from "./Components/01-useState/CounterApp"
import CounterWithCustomHook from "./Components/01-useState/CounterWithCustomHook"
import FromWithCustomHook from "./Components/02-useEffect/FormWithCustomHook"
import SimpleForm from "./Components/02-useEffect/SimpleForm"
import MultipleCustomHooks from "./Components/03-examples/MultipleCustomHooks"
import FocusScreen from "./Components/04-useRef/FocusScreen"
import RealExapleRef from "./Components/04-useRef/RealExapleRef"
import Layout from "./Components/05-useLayoutDefect/Layout"
import CallBackHook from "./Components/06-Memos/CallBackHook"
import MemoHook from "./Components/06-Memos/MemoHook"
import Memorize from "./Components/06-Memos/Memorize"
import HookApp from "./Components/HookApp"

function App() {

  return (
    <>
      <HookApp/>
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
    </>
  )
}

export default App
