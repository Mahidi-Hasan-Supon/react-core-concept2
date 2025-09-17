
import './App.css'
import Batsman from './batsman'
import Bowler from './bolwer'

function App() {

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
