import React from 'react';
import './App.css';
import Switch from './components/Switch.js'
import { useState } from 'react';

function App() {

  const [isToggled, setIsToggle] = useState(false)

  const tgleSwt = () =>{
    setIsToggle(!isToggled)
    console.log(isToggled)
  }

  return (
    <>
    <Switch 
    isToggle={isToggled} 
    onToggle={tgleSwt}/>
    </>
  );
}

export default App;
