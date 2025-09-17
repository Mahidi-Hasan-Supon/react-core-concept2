import { use } from "react"
import Friend from "./friend"
export default function Friends({messageFriends}){
    const friends = use(messageFriends)
    console.log(friends)
    return (
        <div className="card">
            <p>Friends: {friends.length}</p>

    {
        friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
    }



        </div>
       
    )
     
}