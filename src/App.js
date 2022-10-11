import './App.css';
import React,{useState} from 'react';

function App() {
   const[text, setText] = useState("Click 👇below to win a real price!💕");
   const[text1, setText1] = useState("");

  return (
    <div className="App">
      <h1>{text}</h1>
      <button className='btn' onClickCapture={()=>{setText1("Please don't click on anykind of links...Be safe")}} onClick={()=>{setText("Your Bank Account Hacked 😂😂 By Shaikh Vakas Ahmed")}}>Button</button>
      <h1 className='h'>{text1}</h1>
    </div>
  );
}

export default App;
