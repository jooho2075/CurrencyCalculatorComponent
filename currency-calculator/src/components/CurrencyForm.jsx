import { useState } from "react";

const CurrencyForm = ({ bankInfo, onClose }) => {
    // 환율 금액 입력 useState
    const [inputMoney, setInputMoney] = useState('');
    const [fromNation, setFromNation] = useState(bankInfo.from);
    const [toNation, setToNation] = useState(bankInfo.to);

    // 환율 금액 핸들링 함수
    const handleInputMoney = (e) => {
        setInputMoney(e.target.value);
    }

    function getNationEmblem(nationCode) {
        return `https://hatscripts.github.io/circle-flags/flags/${nationCode}.svg`;
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

                <h1 className="text-2xl font-bold mb-8 text-center">환율 계산기</h1>
                
                <form className="flex flex-col">
                    <div className="mb-6">
                        <p className="mb-2 font-medium">환전금액</p>
                        <div className="flex gap-3 items-center">
                            <img 
                                className="w-10 h-10 rounded-full object-cover shadow-sm"
                                src={getNationEmblem(fromNation)} alt="from nation" />
                            <select 
                                className="border border-gray-300 rounded bg-white h-10 px-2 outline-none focus:border-black" 
                                defaultValue={bankInfo.from} 
                                onChange={(event) => setFromNation(event.target.value)}>
                                <option value="" disabled hidden>-------</option>
                                <option value="kr">원</option>
                                <option value="us">달러</option>
                                <option value="eu">유로</option>
                            </select>
                            <input 
                                type="number"
                                value={inputMoney}
                                onChange={handleInputMoney}
                                className="flex-1 border border-gray-300 outline-none px-3 py-1 h-10 rounded
                                           [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                                           [&::-webkit-inner-spin-button]:appearance-none
                                           bg-white focus:border-black transition-all"
                            />
                        </div>
                        <p className="text-sm mt-2">
                            입력금액 : {inputMoney ? Number(inputMoney).toLocaleString() : 0}
                        </p>
                    </div>

                    <div className="mb-8">
                        <p className="mb-2 font-medium">한화(\)</p>
                        <div className="flex gap-3 items-center">
                            <img 
                                className="w-10 h-10 rounded-full object-cover shadow-sm"
                                src={getNationEmblem(toNation)} alt="to nation" />
                            <select 
                                className="border border-gray-300 rounded bg-white h-10 px-2 outline-none focus:border-black" 
                                defaultValue={bankInfo.to} 
                                onChange={(event) => setToNation(event.target.value)}>
                                <option value="" disabled hidden>-------</option>
                                <option value="kr">원</option>
                                <option value="us">달러</option>
                                <option value="eu">유로</option>
                            </select>
                            <input 
                                type="number"
                                className="flex-1 border border-gray-300 outline-none px-3 py-1 h-10 rounded
                                           [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                                           [&::-webkit-inner-spin-button]:appearance-none
                                           bg-white focus:border-black transition-all" 
                            />
                        </div>
                        <p className="text-sm mt-2 font-semibold">
                            결과 : 0
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={onClose} 
                            className="border border-black bg-black text-white hover:bg-gray-800 transition-colors 
                                    rounded-lg w-full h-12 font-medium">
                                닫기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CurrencyForm;