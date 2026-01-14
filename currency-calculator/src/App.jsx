import { useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './components/Home'
import HomeLayout from './layouts/HomeLayout'
import Modal from './components/ui/Modal'

const banks = ['Woori', 'Shinhan','KB','NH','Hana', ]

function App() {

  return (
    <div >
      <HomeLayout>
        <h1>BANK LIST</h1>
        <div id='bank-list'>
        </div>
        <Home bank_list={banks}/>
      </HomeLayout>
      {/* <CurrencyForm/> */}
      <Modal/>
    </div>  
  )
}

export default App
