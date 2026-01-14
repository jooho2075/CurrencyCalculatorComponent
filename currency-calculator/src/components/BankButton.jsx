import React from 'react'

const BankButton = ({bank}) => {
  return (
    <button
        key={bank.id}
        onClick={() => {
            console.log("버튼 눌림");
        }
        }
        className="m-2 px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
        data-cy="add-todo-button">
        {bank.title}
    </button>
  )
}

export default BankButton