import { use } from "react"
import User from "./use"
export default function Users({fetchUsers}){
    const messages = use(fetchUsers)
    console.log(messages)
    return (
        <div className="card">
            <p>Users: {messages.length}</p>
            {
                messages.map(message=><User message={message}></User>)
            }
        </div>
    )
}

