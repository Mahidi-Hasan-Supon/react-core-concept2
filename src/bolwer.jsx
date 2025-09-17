import { useState } from "react"

export default function Bowler(){
   const [name,setName] = useState('Stac')

    const [wicket,setWicket] = useState(0)
    const [overs,setOvers] = useState(0)
    const [NoBall,setNoBall] = useState(0)

    const handlewicket = ()=>{
        const updateWicket = wicket + 1
        setWicket(updateWicket)
    }
    const handleNoBall = ()=>{
    const updateNoBall = NoBall + 1
    setNoBall(updateNoBall)
    alert('NO Ball')

    }
    const handleOvers = ()=>{
        
        setOvers(overs + 1)

    }



    const bolwerStyle = {
        fontSize:'50px'
    }
  


    return (
        <div>
            <p style={bolwerStyle}>Name: {name}</p>
            <p style={bolwerStyle}>Wicket: {wicket}</p>
            <p style={bolwerStyle}>overs: {overs}</p>
            <p style={bolwerStyle}>NoBall: {NoBall}</p>

    


            <button onClick={handlewicket}>Wicket</button>
            <button onClick={handleOvers}> Overs</button>
            <button onClick={handleNoBall}>NO ball</button>
        </div>
    )
}