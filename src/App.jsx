import { useState } from 'react'
import Main from './components/Main'
import Signupform from './components/Signupform'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div>
    <Signupform/>
    <Main data={"Winner"}></Main>
  </div>
  </>
   
  )
}

export default App
