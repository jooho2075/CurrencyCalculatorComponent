import { useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import CurrencyForm from './components/CurrencyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <DefaultLayout>
        <CurrencyForm/>
      </DefaultLayout>
    </div>  
  )
}

export default App
