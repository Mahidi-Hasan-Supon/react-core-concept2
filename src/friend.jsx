export default function Friend({friend}){

    console.log(friend)
    const {name,id,email} = friend
    return (
        <div className="card">
            <h3>Name: {name}</h3>
            <p>id: {id}</p>
            <p>email: {email}</p>
        </div>
    )
}