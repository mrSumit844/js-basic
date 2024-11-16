import { useState } from 'react'
import './App.css';


function App() {

   let [counter,setCounter] = useState(15)
  //let counter =5
  const addValue = () => {
    //counter = counter + 1
    setCounter(counter+1)
      
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  
  return (
    <>

    <h1>Counter project using react</h1>
    <h2>counter value: {counter}</h2>
    <br/>

    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>Remove value</button>
    </>
    
    
  );
}

export default App;
