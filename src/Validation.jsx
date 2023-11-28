import React, { useState } from 'react';

function Validation() {
  const [name, setName] =useState()
  const [email, setEmail] =useState()
  const [error, setError] =useState(false)
  const [emailError, setEmailError] =useState(false)

  const emailChack = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const handleName = (e)=>{
    let name = e.target.value
    if(name.length < 3){
         setError(true)
    }else{
      setError(false)
    } 
    setName(name)
  }
  const handleEmail = (e)=>{
    let email = e.target.value;
    if(!email.match(emailChack)){
      setEmailError(true)
    }
    else{
      setEmailError(false)
    }
    setEmail(email)
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    // alert(e.target[0].value +" "+ e.target[1].value)
    let name = e.target[0].value
    if(name.length < 3){
         setError(true)
    }else{
      setError(false)
    } 
    let email = e.target[1].value;
    if(!email.match(emailChack)){
      setEmailError(true)
    }
    else{
      setEmailError(false)
    }
    if((!name.length < 3) && (email.match(emailChack))){
      alert("Form has been Submitted")
    }
  }
  return (
    <div>
      <h1>Form Validation Demo</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Enter Name:</label>
          <input type="text" name="Name" onChange={handleName} value={name} required />
          <br />
          {error ? <span style={{color:"red"}}>Name Length must be greater than 2 characters</span>:"" }
          <br /> <br />
          <label htmlFor="">Enter Email:</label>
          <input type="text" name='email'onChange={handleEmail} value={email} required />
          <br />
          {emailError ?<span style={{color:'red'}}>Invalid Email</span>: "" }
          <br /><br />
          <input type="submit" value="submit" />
        </form>
    </div>
  );
}

export default Validation