import React, { useState } from 'react'
import CurrencyForm from './CurrencyForm';
import Modal from './ui/Modal';
import { createPortal } from 'react-dom';
import { BANK_COLOR_CODE } from '../constants/BANK_COOLOR_CODE';


const BankButton = ({ bank, rate }) => {
  const [openModal, open] = useState(false);
  const closeModal = () => open(false);
  
  return (
    <>
      <button
        key={bank.id}
        onClick={() => open(true)}
        className="m-2 px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
        data-cy="add-todo-button">
        {bank.title}
      </button>

      {openModal && createPortal(
        <Modal onClose={closeModal}>
          <CurrencyForm
            bankInfo={bank}
            bgColor={BANK_COLOR_CODE[bank.title]}
            rate={rate}
            onClose={() => open(false)}
          />
        </Modal>,
        document.body
      )}
    </>

  )
}

export default BankButton