import DefaultLayout from './layouts/DefaultLayout'
import Home from './components/Home'
import HomeLayout from './layouts/HomeLayout'
import Modal from './components/ui/Modal'
import CurrencyForm from './components/CurrencyForm'

const banks = [
  {
    id: 1,
    title: 'Woori'
  }, 
  {
    id:2,
    title: 'Shinhan'
  },
  { 
    id:3,
    title: 'KB'
  },
  {
    id:4,
    title: 'NH'
  },
  {
    id:5,
    title: 'Hana'
  } 
]

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
      {/* <Modal onClose={()=>open(false)}/> */}
    </div>  
  )
}

export default App
