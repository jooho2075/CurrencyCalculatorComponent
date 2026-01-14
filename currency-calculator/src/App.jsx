import { useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import CurrencyForm from './components/CurrencyForm'
import HomeLayout from './layouts/HomeLayout'
import Modal from './components/ui/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomeLayout>
        <h1>BANK LIST</h1>
      </HomeLayout>
      {/* <CurrencyForm/> */}
      <Modal/>
    </div>  
  )
}

export default App
