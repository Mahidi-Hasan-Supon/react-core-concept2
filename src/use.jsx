export default function User({message}){
    console.log(message)
    return (
        <div>
            <h4 style={{
                color:"red"
            }}><span style={{color:'white',fontSize:20}}>CompanyName:</span> <span style={{fontSize:20}}>{message.company.name}</span></h4>
            <h4 style={{
                color:"green"
            }}>AddressCity: {message.address.city}</h4>
        </div>
    )
}