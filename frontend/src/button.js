import React, { Suspense } from "react";
import './button.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Button=()=>
{
  
    // const nav=useNavigate([]);
    const  [w,setW]=useState('');
    // const handleClick= async() => {
    //   const  response = await axios.get("http://localhost:8000/"+w);
    //   console.log(response.data);
    //   if(response.data)
    //   {
    //       nav('/celebs')
    //   }
    //   else
    //   {
    //       alert('failed');
    //   }
    // };
    const navigate = useNavigate();
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleClick= async() => {
    if (w.trim() !== ''){
    const  response = await axios.get("http://localhost:8000/"+w);
    console.log(response.data);
    if(response.data)
    {
      setButtonClicked(true);
    }
    else
    {
        alert('Failed attempt');
    }
  }
  else{
    alert('Good cover drive! But never works against me😜');
  }
  };

  useEffect(() => {
    // Check if the button has been clicked
    if (isButtonClicked) {
      // Navigate to '/flowers' immediately
      navigate('/flowers');
    }
  }, [isButtonClicked, navigate]);

  useEffect(() => {
    // Set a timeout for 5000 milliseconds (5 seconds) after the initial navigation to '/flowers'
    if (isButtonClicked) {
      const timeoutId = setTimeout(() => {
        // Redirect to '/flowers/main' after the specified time interval
        // alert('redirecting_2');
        navigate('/celebs');
      }, 10000);
      // alert('redirecting');
      // Clear the timeout if the component unmounts or the button is clicked again before the timeout completes
      return () => console.log('redirect'); clearTimeout(timeoutId);
    }
  }, [isButtonClicked, navigate]);
let coun;
const giveHint_0=async()=>{
  coun=4;
  coun=coun+1;
  const  response = await axios.post("http://localhost:8000/"+coun);
console.log(response);
  console.log('toast');
  toast('Check your email Id throughly');
  document.getElementById("hint0").hidden="true";
}  


    const giveHint_1=async()=>{
      coun=3;
      coun=coun+1;
      const  response = await axios.post("http://localhost:8000/"+coun);
    console.log(response);
      console.log('toast');
      toast('Hint:Within the covert numeric signature, the combination of characters subtly reveals the concealed fusion of the current electronic communication epoch');
      document.getElementById("hint1").hidden="true";
    }
    const giveHint_2=async()=>{
      coun=2;
      coun=coun+1;
      const  response = await axios.post("http://localhost:8000/"+coun);
    console.log(response);
      console.log('toast');
      toast('Hint:Within the cryptic numeric enigma, the initial pair of digits intricately unveils the clandestine unity of the current months chronological position and the days numeric identity, orchestrating a subtle ballet of temporal harmony.');
      document.getElementById("hint2").hidden="true";
    }
    const giveHint_3=async()=>{
      coun=1;
      coun=coun+1;
      const  response = await axios.post("http://localhost:8000/"+coun);
    console.log(response);
      console.log('toast');
      toast('Hint: All the code contain numericals only...');
      document.getElementById("hint3").hidden="true";
    }
    const giveHint_4=async()=>{
      coun=0;
      coun=coun+1;
      const  response = await axios.post("http://localhost:8000/"+coun);
    console.log(response);
      console.log('toast');
      toast('Hint:Length of code==len(code)');
      document.getElementById("hint4").hidden="true";
    }
    return(
        <>

<div class="modal-container" id="bod">
  <input id="modal-toggle" type="checkbox"/>
  <div className="mol">
  <label class="modal-btn" for="modal-toggle">Let's Go</label> 
  </div >
  <label class="modal-backdrop" for="modal-toggle"></label>
  <div class="modal-content">
    <label class="modal-close" for="modal-toggle">&#x2715;</label>
    <h2>THINK!</h2><hr />
    <p className="hef">Passcode:</p>
    <input placeholder="Enter the passcode" className="pwd" value={w} onChange={(w)=>setW(w.target.value)} />
    <label class="modal-content-btn" for="modal-toggle" onClick={handleClick} >OK</label>
    <ToastContainer/>
    <button className="hint" id="hint0" style={{width:"60px"}}  onClick={giveHint_0} >Hint 0</button>
      <button className="hint" id="hint1" style={{width:"60px"}}  onClick={giveHint_1} >Hint 1</button>
      <button className="hint" id="hint2" style={{width:"60px"}} onClick={giveHint_2} >Hint 2</button>
      <button className="hint" id="hint3" style={{width:"60px"}} onClick={giveHint_3}  >Hint 3</button>
      <button className="hint" id="hint4" style={{width:"60px"}} onClick={giveHint_4} >Hint 4</button> 
  </div>          
</div> 
        </>
    )
}

export default Button;