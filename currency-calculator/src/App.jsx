import Home from './components/Home'
import HomeLayout from './layouts/HomeLayout'

const banks = [
  {
    id: 1,
    title: 'Woori',
    from: "us",
    to: "kr"
  }, 
  {
    id:2,
    title: 'Shinhan',
    from: "eu",
    to: "kr"
  },
  { 
    id:3,
    title: 'KB',
    from: "jp",
    to: "kr"
  },
  {
    id:4,
    title: 'NH',
    from: "cn",
    to: "kr"
  },
  {
    id:5,
    title: 'Hana',
    from: "vn",
    to: "kr"
  },
]

function App() {

  return (
    <div >
      <HomeLayout>
        <h1>BANK LIST</h1>
        <Home bankList={banks}/>
      </HomeLayout>
    </div>  
  )
}

export default App
