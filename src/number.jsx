import { useState } from "react"

export default function Number(){
    const [one,setOne] = useState(0)

    const handleOne = ()=>{
        setOne(one+1);
    }
    const handleTwo = ()=>{
        setOne(one-1);
    }
    const handleResend= ()=>{
        setOne(0)
    }

    return (
        <div>
            <h1>Count: {one}</h1>
            <button onClick={handleTwo}>-1</button>
            <button onClick={handleOne}>+1</button>
            <button onClick={handleResend}>resend</button>
        </div>
    )
}

