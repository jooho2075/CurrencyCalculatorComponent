import BankButton from "./BankButton";


const Home = ({ bankList }) => {
    const bankButtons = bankList.map(bank => <BankButton bank={bank}/>);

    return (
        <>
        {bankButtons}
        </>
    )
}

export default Home;