import { useState,useEffect } from 'react';
import './App.css';

function App() {
const [numbers,setNumbers]=useState([]);
const [numbers_a,setNumbers_a]=useState([]);


useEffect(() => {
  setNumbers_a([localStorage.getItem('localstorage')]);
},[]);


function Add(value){
setNumbers([...numbers,value])
}




function Add_a(value){
  setNumbers_a([...numbers_a,value])
  setNumbers([])
  }
  
  
useEffect(() => {
  localStorage.setItem('localstorage', JSON.stringify(numbers_a));
}, [numbers_a]);

function Del(){
 setNumbers((numbers) => numbers.filter((_, i) => i !== numbers.length - 1))
  }
  
  return (
    <div className="App">
    <main> <div className="screen">{numbers}</div>
     <div className="field">
<div onClick={()=>Add(1)}  className="field_button">1</div>
<div onClick={()=>Add(2)}  className="field_button">2</div>
<div onClick={()=>Add(3)} className="field_button">3</div>
<div onClick={()=>Add(4)} className="field_button">4</div>
<div onClick={()=>Add(5)} className="field_button">5</div>
<div onClick={()=>Add(6)} className="field_button">6</div>
<div onClick={()=>Add(7)} className="field_button">7</div>
<div onClick={()=>Add(8)} className="field_button">8</div>
<div onClick={()=>Add(9)} className="field_button">9</div>
<div onClick={Del} className="field_button field_button_x">X</div>
<div onClick={()=>Add(0)} className="field_button">0</div>
<div onClick={()=>Add_a(numbers)} className="field_button field_button_ok">OK</div>
     </div></main>
    <aside>
    <div>{numbers_a.map(dat=>{return(<div>{dat}</div>)})}</div>
    </aside>
   
    </div>
  );
}

export default App;
