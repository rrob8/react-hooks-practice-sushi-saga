import React, {useState} from 'react'



function Wallet ({onAddMoney}) {

    const [amount, setAmount] = useState('')

    function handleSubmit (e) {
        e.preventDefault()
        onAddMoney(amount)
        setAmount('')
    }

    function handleUpdate (e) {
        
        setAmount(e.target.value)
    }
    
    return (
        <div>
        <form
        onSubmit={handleSubmit}
        >
        <input placeholder='Enter amount'
        value={amount}
        onChange={handleUpdate}
        >
        </input>
        <button>
            Add Money
        </button>
        </form>
        </div>
    )
}




export default Wallet 