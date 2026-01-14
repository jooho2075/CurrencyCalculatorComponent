import Modal from "../components/ui/Modal"
import CurrencyForm from "./CurrencyForm";
import BankButton from "./BankButton";
import { useEffect, useState } from "react";


const Home = ({ bank_list }) => {
    const [todayRate, setTodayRate] = useState(null);

    const getTodayCurrency = async() => {
        const url = "https://open.exchangerate-api.com/v6/latest";
        const res = await fetch(url);
        const data = await res.json();
        return data.rates;
    }

    useEffect(() => {
        getTodayCurrency().then(rates => {
            setTodayRate(rates);
        });
    }, []);

    if (!todayRate) return <p>로딩 중...</p>;

    const bankButtons = bank_list.map(bank => <BankButton bank={bank} rate={todayRate}/>);

    return (
        <>
        {bankButtons}
        </>
    )
}

export default Home;