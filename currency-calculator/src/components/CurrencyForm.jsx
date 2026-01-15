
import { useState, useEffect } from "react";
import { NATION_CURRENCY_CODE } from "../constants/NATION_CURRENCY_CODE";
import { NATION_CURRENCY_NAME } from "../constants/NATION_CURRENCY_NAME";

const CurrencyForm =({from, to, onClose, bgColor}) => {
    // 환율 금액 입력 useState
    const [inputMoney, setInputMoney] = useState('');
    const [fromNation, setFromNation] = useState(from);
    const [toNation, setToNation] = useState(to);
    const [totalMoney, setTotalMoney] = useState(0);
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
    
    // 환율 금액 핸들링 함수
    const handleInputMoney = (e) => {
        const value = e.target.value;
        setInputMoney(value);

        if (!value) {
            setTotalMoney(0);
            return;
        }

        changeTotalMoney(value);
    } 

    function changeTotalMoney(value) {
        const rateFrom = todayRate[NATION_CURRENCY_CODE[fromNation]];
        const rateTo = todayRate[NATION_CURRENCY_CODE[toNation]];

        const exchangeRate = rateTo / rateFrom; // number
        const result = Number(value) * exchangeRate;

        setTotalMoney(result);
    }

    function getNationEmblem(nationCode) {
        return `https://hatscripts.github.io/circle-flags/flags/${nationCode}.svg`;
    }

    if (!todayRate) return <p>로딩 중...</p>;

    return (
        <div className="rounded-2xl min-h-[60vh] flex items-center justify-center p-4"
             style={{backgroundColor: bgColor}}>
            <div className="w-full max-w-xs bg-white rounded-2xl shadow-md p-6">
                <h1 className="text-xl font-semibold text-left mb-6">환전 금액</h1>
                {/* From Section */}
                <div className="flex items-center border border-gray-300 rounded-xl p-3 mb-2 bg-white gap-3">
                    <img
                      className="w-8 h-8 rounded-full object-cover"
                      src={getNationEmblem(fromNation)}
                      alt="from flag"
                    />
                    <select
                      className="w-15 bg-transparent outline-none text-lg font-medium"
                      defaultValue={from}
                      onChange={(event) => {
                        const newNation = event.target.value;
                        setFromNation(newNation);
                        if (inputMoney) {
                            const rateFrom = todayRate[NATION_CURRENCY_CODE[newNation]];
                            const rateTo = todayRate[NATION_CURRENCY_CODE[toNation]];
                            const exchangeRate = rateTo / rateFrom;
                            setTotalMoney(Number(inputMoney) * exchangeRate);
                        }
                      }}
                    >
                        <option value="kr">KRW</option>
                        <option value="us">USD</option>
                        <option value="eu">EUR</option>
                        <option value="jp">JPY</option>
                        <option value="cn">CNY</option>
                        <option value="gb">GBP</option>
                        <option value="ca">CAD</option>
                        <option value="au">AUD</option>
                        <option value="vn">VND</option>
                        <option value="th">THB</option>
                        <option value="ph">PHP</option>
                        <option value="tw">TWD</option>
                    </select>
        
                    <input
                    type="number"
                    value={inputMoney}
                    onChange={handleInputMoney}
                    placeholder="금액 입력"
                    className="pl-2 flex-1 border-blue-300 text-blue-600 text-lg outline-none text-left bg-transparent
                               appearance-none 
                               [&::-webkit-outer-spin-button]:appearance-none 
                               [&::-webkit-inner-spin-button]:appearance-none
                               [&::-moz-appearance]:textfield"
                    />
                </div>
        
                {/* 입력 박스 밑 파란 작은 글씨  */}
                <p className="text-xs text-blue-600 text-left pl-5 mb-4">
                    {inputMoney || 0} {NATION_CURRENCY_NAME[fromNation]}
                </p>
        
                {/* = Divider */}
                <div className="flex justify-center my-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-400 text-white">
                      =
                    </div>
                </div>
                <br/>
        
                {/* To Section */}
                <div className="flex items-center border border-gray-300 rounded-xl p-3 mb-2 bg-white">
                    <img
                      className="w-8 h-8 rounded-full object-cover mr-3"
                      src={getNationEmblem(toNation)}
                      alt="to flag"
                    />
                    <select
                        className="w-15 bg-transparent outline-none text-lg font-medium"
                        defaultValue={to}
                        onChange={(event) => {
                            const newNation = event.target.value;
                            setToNation(newNation);
                            if (inputMoney) {
                                const rateFrom = todayRate[NATION_CURRENCY_CODE[fromNation]];
                                const rateTo = todayRate[NATION_CURRENCY_CODE[newNation]];
                                const exchangeRate = rateTo / rateFrom;
                                setTotalMoney(Number(inputMoney) * exchangeRate);
                            }
                        }}
                    > 
                        <option value="kr">KRW</option>
                        <option value="us">USD</option>
                        <option value="eu">EUR</option>
                        <option value="jp">JPY</option>
                        <option value="cn">CNY</option>
                        <option value="gb">GBP</option>
                        <option value="ca">CAD</option>
                        <option value="au">AUD</option>
                        <option value="vn">VND</option>
                        <option value="th">THB</option>
                        <option value="ph">PHP</option>
                        <option value="tw">TWD</option>
                    </select>
        
                    <input
                      type="text"
                      readOnly
                      value={totalMoney%1 == 0 ? totalMoney.toFixed(0) : totalMoney.toFixed(2)}
                      className="pl-5 w-full border-blue-300 text-blue-600 text-lg mb-1 outline-none text-left bg-transparent"
                        />
                </div>
                <p className="text-xs text-blue-600 text-left pl-5 mb-4">
                    {totalMoney%1 == 0 ? totalMoney.toFixed(0) : totalMoney.toFixed(2)} {NATION_CURRENCY_NAME[toNation]}
                </p>
                <br/>
                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full bg-black text-white rounded-lg h-11 font-semibold hover:bg-gray-800 transition-colors"
                >
                  닫기
                </button>
            </div>
        </div>
    );
}

export default CurrencyForm;