import { useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <DefaultLayout>
        <h1>안녕하세요</h1>
      </DefaultLayout>
    </div>  
  )
}

export default App
