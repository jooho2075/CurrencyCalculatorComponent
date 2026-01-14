import React from 'react'
import Home from '../components/Home'

const banks = ['Woori', 'Shinhan','KB','NH','Hana', ]

const HomeLayout = ({ children }) => {

  return (
    <div>
      <div id='bank-list'>
        {children}
      </div>
      <Home bank_list={banks}/>
    </div>
  )
}

export default HomeLayout;