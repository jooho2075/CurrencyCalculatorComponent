import CurrencyForm from "../CurrencyForm";

const Modal = ({ children }) => {
    return(
        <div className="w-96 bg-sky-400 rounded-lg">
            <h1>모달창입니다.</h1>
            {children}
        </div>
    )
}

export default Modal;