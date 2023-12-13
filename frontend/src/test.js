import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import { useHistory } from 'react-router-dom';
import { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';


const Test=()=>
{
    const  [w,setW]=useState('');
    const nav=useNavigate();

    const handleClick= async() => {
        //
        if (w.trim() !== '') {
          // Input is not empty, navigate to '/main'
          nav('/');
        } else {
          // Input is empty, do something else or show an error message
          alert('Input field is empty!');
        }
      };
    
     

      const handleHint=()=>
      {
        toast('It is of 4 numericals');
      }
      const handleHint_2=()=>
      {
        toast('It is of 4 numericals');
      }
      // const navigate = useNavigate();

      // useEffect(() => {
      //   // Set a timeout for 2000 milliseconds (2 seconds)
      //   const timeoutId = setTimeout(() => {
      //     // Redirect to '/flowers/main' after the specified time interval
      //     navigate('/flowers');
      //   }, 4000);
    
      //   // Clear the timeout if the component unmounts before the timeout completes
      //   return () => clearTimeout(timeoutId);
      // }, [navigate]);
      
    return(
        <>
            <input placeholder="enter the passcode" onChange={(w)=>setW(w.target.value)}/>
            <button onClick={handleClick}>Click me</button>
            <ToastContainer/>
            <button onClick={handleHint}>Hint</button>:
            <button onClick={handleHint_2}>Hint 2</button>
        </>
    )
}


export default Test;