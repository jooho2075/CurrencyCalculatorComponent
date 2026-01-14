import { useState } from "react";
import { createPortal } from 'react-dom';
import Modal from "../components/ui/Modal"
import CurrencyForm from "./CurrencyForm";


const Home = ({ bank_list }) => {
    const [openModal, open] = useState(false);

    // bank 순회
    const renderBankItems = () => {
        if (!bank_list) return null;

        return bank_list.map((bank, idx) => (
            <button
                key={idx}
                onClick={() => {
                    open(true);
                }
                }
                className="m-2 px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
                data-cy="add-todo-button"
            >
                {bank}
            </button>

        ))
    }

    return (
        <div>
            {renderBankItems()}
            {openModal && createPortal(
                <Modal onClose={() => open(false)}>
                    <CurrencyForm />
                </Modal>,
                document.body
            )}

        </div>
    )
}

export default Home;