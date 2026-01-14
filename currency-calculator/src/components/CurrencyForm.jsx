import { useState } from "react";
import { NATION_CURRENCY_CODE } from "../constants/NATION_CURRENCY_CODE";

const CurrencyForm =({bankInfo, onClose, rate}) => {
    // 환율 금액 입력 useState
    const [inputMoney, setInputMoney] = useState('');
    const [fromNation, setFromNation] = useState(bankInfo.from);
    const [toNation, setToNation] = useState(bankInfo.to);
    const [totalMoney, setTotalMoney] = useState(0);
    console.log(toNation, "의 환율은 ", rate[NATION_CURRENCY_CODE[toNation]]);
    
    // 환율 금액 핸들링 함수
    const handleInputMoney = (e) => {
        const value = e.target.value;
        setInputMoney(value);

        if (!value) {
            setTotalMoney(0);
            return;
        }

        const rateFrom = rate[NATION_CURRENCY_CODE[fromNation]];
        const rateTo = rate[NATION_CURRENCY_CODE[toNation]];

        const exchangeRate = rateTo / rateFrom; // number
        const result = Number(value) * exchangeRate;
        console.log("계산결과는 : ", rateTo);

        setTotalMoney(result);
    } 

    function getNationEmblem(nationCode) {
        return `https://hatscripts.github.io/circle-flags/flags/${nationCode}.svg`;
    }

    return(
        <>
            <h1>환율 계산기</h1>
            <form>
                <div className="mb-4">
                    <p className="mb-2">환전금액</p>
                    <div className="flex gap-4 items-center">
                        <img 
                            class="w-10 h-10 rounded-full object-cover object-cover"
                            src={getNationEmblem(fromNation)} alt="" />
                        <select className="border border-black bg-white h-10" name="" id=""
                                defaultValue={bankInfo.from} onChange={(event) => setFromNation(event.target.value)}>
                            <option value="" disabled hidden>-------</option>
                            <option value="kr">원</option>
                            <option value="us">달러</option>
                            <option value="eu">유로</option>
                        </select>
                        <input 
                            type="number"
                            value={inputMoney} // 환전금액 연결
                            onChange={handleInputMoney} // 환전금액 핸들링 함수
                            className="border border-black outline-none px-2 py-1 h-10 
                                        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                                        [&::-webkit-inner-spin-button]:appearance-none
                                        bg-white mt-2"
                                         
                        />
                    </div>
                    {/*금액 입력 결과*/}
                    <p className="text-sm">
                        입력금액 : {inputMoney ? Number(inputMoney).toLocaleString() : 0}
                    </p>
                </div>

                <div>
                    <p>한화(\)</p>
                    <div className="flex gap-4">
                        <img 
                            className="w-10 h-10 rounded-full object-cover object-cover"
                            src={getNationEmblem(toNation)} alt="" />
                        <select className="border border-black bg-white" name="" id=""
                                defaultValue={bankInfo.to} onChange={(event) => setToNation(event.target.value)}>
                            <option value="" disabled hidden>-------</option>
                            <option value="kr">원</option>
                            <option value="us">달러</option>
                            <option value="eu">유로</option>
                        </select>
                        <input 
                            type="String"
                            value={Number.isNaN(totalMoney) ? "" : totalMoney.toFixed(2)}
                            readOnly
                            className="border border-black outline-none px-2 py-1 [appearance:textfield] 
                                    [&::-webkit-outer-spin-button]:appearance-none 
                                    [&::-webkit-inner-spin-button]:appearance-none
                                    bg-white" 
                        />
                    </div>
                    <p className="text-sm">결과 : </p>
                </div>
            </form>
        </>
    )
}

export default CurrencyForm;