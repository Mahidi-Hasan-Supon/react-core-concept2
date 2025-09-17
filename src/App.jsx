

import { Suspense } from 'react'
import './App.css'
import Batsman from './batsman'
import Bowler from './bolwer'
import Users from './users'
import Friends from './friends'
import Posts from './posts'
import Number from './number'


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

// const fetchFriends  = async()=>{
//   const res =await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json()

// }

// const postsFetch = async()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return res.json()
// }

function App() {
  // const messageFriends = fetchFriends()
  // const messagePosts = postsFetch();

  function handleClick(){
    alert('click1')
  }
  const handleClick3 = ()=>{
    alert('click button 3')

  }
  const handleClick5 = (num)=>{
    const number = num + 5
    alert(number)

  }

  

  return (
    <>
      <h3>Vite + React</h3>
      {/* jeson placehoder posts apii */}
      {/* <Suspense fallback={<p>Posts are loading...</p>}>
      <Posts messagePosts = {messagePosts}></Posts>
      </Suspense> */}



      <Suspense fallback={<h1>Name loading...</h1>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      {/* <Suspense fallback={<p>friends are not loading...</p>}>
        <Friends messageFriends={messageFriends}></Friends>
      </Suspense> */}
     


{/* number count */}
{/* <Number></Number> */}




{/* bowler */}
      <Bowler></Bowler>
      <Batsman></Batsman>


      {/* <button onClick={handleClick}>Click 1</button>
      <button onClick={function handleClick(){
        alert('click 2')
      }}>Click2</button>
      <button onClick={handleClick3}>Click 3</button>
      <button onClick={()=>{
        alert('click btn 3')

      }}>Click 3</button>
      {/* <button onClick={handleClick5(10)}>click 4</button> */}
      {/* <button onClick={()=>handleClick5(10)}>click 4</button> */}
    </>
  )
}

export default App
