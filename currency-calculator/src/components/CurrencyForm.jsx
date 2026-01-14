const CurrencyForm =() => {
    return(
        <>
            <h1>환율 계산기</h1>
            <form>
                <div className="mb-4">
                    <p>환전금액</p>
                    <div className="flex gap-4">
                        <select className="border border-black bg-white" name="" id="">
                            <option value="">국가1</option>
                            <option value="">국가2</option>
                            <option value="">국가3</option>
                        </select>
                        <input 
                            type="number" 
                            className="border border-black outline-none px-2 py-1 
                                        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                                        [&::-webkit-inner-spin-button]:appearance-none
                                        bg-white"
                                         
                        />
                    </div>
                </div>
                <div>
                    <p>한화(\)</p>
                    <select className="border border-black bg-white" name="" id="">
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
                
            </form>
            
        </>
    )
}

export default CurrencyForm;