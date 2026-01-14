import { useState } from "react";
import { createPortal } from 'react-dom';

const Home = ({ bank_list }) => {
    const [openModal, open] = useState(false);

    // bank 순회
    const renderBankItems = () => {
        if (!bank_list) return null;

        return bank_list.map((bank, idx) => (
            <button 
                key={idx} 
                // TODO : onClick에 modal Open 이벤트 추가
                onClick={() => console.log(`${bank} 선택됨`)}
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
            {/* TODO : Model 코드 */}
            
        </div>
    )
}

export default Home;