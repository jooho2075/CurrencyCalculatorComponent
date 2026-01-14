import Modal from "../components/ui/Modal"
import CurrencyForm from "./CurrencyForm";
import BankButton from "./BankButton";


const Home = ({ bank_list }) => {
    const bankButtons = bank_list.map(bank => <BankButton bank={bank}/>);

    return (
        <>
        {bankButtons}
        </>
    )
}

export default Home;