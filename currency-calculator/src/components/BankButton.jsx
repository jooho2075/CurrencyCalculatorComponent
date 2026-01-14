import React, { useState } from 'react'
import CurrencyForm from './CurrencyForm';
import Modal from './ui/Modal';
import { createPortal } from 'react-dom';


const BankButton = ({ bank }) => {
  const [openModal, open] = useState(false);
  const closeModal = () => open(false);
  
  return (
    <>
      <button
        key={bank.id}
        onClick={() => open(true)
        }
        className="m-2 px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
        data-cy="add-todo-button">
        {bank.title}
      </button>

      {openModal && createPortal(
        <Modal onClose={closeModal}>
          <CurrencyForm
            bankInfo={bank}
            onClose={() => open(false)}
          />
        </Modal>,
        document.body
      )}
    </>

  )
}

export default BankButton