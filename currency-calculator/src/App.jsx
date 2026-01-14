import DefaultLayout from './layouts/DefaultLayout'
import Home from './components/Home'
import HomeLayout from './layouts/HomeLayout'
import Modal from './components/ui/Modal'
import CurrencyForm from './components/CurrencyForm'

const banks = [
  {
    id: 1,
    title: 'Woori',
    from: "kr",
    to: "us"
  }, 
  {
    id:2,
    title: 'Shinhan',
    from: "kr",
    to: "vn"
  },
  { 
    id:3,
    title: 'KB',
    from: "kr",
    to: "jp"
  },
  {
    id:4,
    title: 'NH',
    from: "kr",
    to: "cn"
  },
  {
    id:5,
    title: 'Hana',
    from: "kr",
    to: "eu"
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
