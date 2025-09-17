import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns] = useState(0)
    const handleSinge=()=>{
        const uapdateRuns = runs +1
        setRuns(uapdateRuns)
    }
    const handleFour=()=>{
        const updateFour = runs+4
        setRuns(updateFour)
    }
    const handleSix=()=>{
        const updateFour = runs+6
        setRuns(updateFour)
    }

    return (
        <div style={{
            fontSize:50,

        }}>
            <p>Name: Williamson</p>
             {
     runs >50&& <p>william Score:50</p> 
    }
            <p>Score: {runs}</p>
            <button onClick={handleSinge}>Single</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}