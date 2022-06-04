import React, {useCallback, useState, useEffect} from 'react'
import ShowIncrement from './ShowIncrement'

const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //   setCounter(counter + 1)
    // }

    const increment = useCallback( (num) => {
      setCounter(c => c + num)
    }, [setCounter])

    useEffect(() => {
      //?
    }, [increment])
    

    return (
      <div>
          <h1>CallBackHook : {counter}</h1>
          <hr />

          <ShowIncrement increment={increment}/>
      </div>
    )
}

export default CallBackHook