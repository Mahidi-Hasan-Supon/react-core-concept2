import { use } from "react"

export default function Users({fetchUsers}){
    const message = use(fetchUsers)
    console.log(message)
    return (
        <div className="card">
            <p>Users: </p>
        </div>
    )
}

