const CurrencyForm =() => {
    return(
        <>
            <h1>환율 계산기</h1>
            <form>
                <div>
                    <p>환전금액</p>
                    <input 
                        type="number" 
                        className="border border-black outline-none px-2 py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    />
                </div>
                
                
            </form>
            
        </>
    )
}

export default CurrencyForm;