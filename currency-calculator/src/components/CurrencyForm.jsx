import { useState } from "react";

const CurrencyForm =() => {
    // 환율 금액 입력 useState
    const [inputMoney, setInputMoney] = useState('');

    // 환율 금액 핸들링 함수
    const handleInputMoney = (e) => {
        setInputMoney(e.target.value);
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
                            src="https://picsum.photos/id/237/200/300" alt="" />
                        <select className="border border-black bg-white h-10" defaultValue="" name="" id="">
                            <option value="" disabled hidden>-------</option>
                            <option value="">국가1</option>
                            <option value="">국가2</option>
                            <option value="">국가3</option>
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
                            class="w-10 h-10 rounded-full object-cover object-cover"
                            src="https://picsum.photos/id/237/200/300" alt="" />
                        <select className="border border-black bg-white" defaultValue="" name="" id="">
                            <option value="" disabled hidden>-------</option>
                            <option value="">국가1</option>
                            <option value="">국가2</option>
                            <option value="">국가3</option>
                        </select>
                        <input 
                            type="number"
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