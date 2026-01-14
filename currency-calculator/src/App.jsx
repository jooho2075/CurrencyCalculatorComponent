import { useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import CurrencyForm from './components/CurrencyForm'
import HomeLayout from './layouts/HomeLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomeLayout>
        <h1>BANK LIST</h1>
        
      </HomeLayout>
    </div>  
  )
}

export default App
