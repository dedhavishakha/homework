import React from 'react'

const Signupform = () => {
  let username;
  let emaill;
  let phone;
  let pass;
  // let firstinput;
  //   const onEventchange=(e)=>{
  //   // console.log(e.target.value)
  //   username=e.target.value;
  //   emaill=e.target.value;
  //   phone=e.target.value;
  //   pass=e.target.value;


  // }
  const onclicking = () => {
    console.log({ username, emaill, phone, pass });

  }
  return (
    <div>
      <form>
        <input type='text' placeholder='username' onChange={(e) => (username = e.target.value)} />
        <input type='email' placeholder='email' onChange={(e) => (emaill = e.target.value)} />
        <input type='number' placeholder='phone' onChange={(e) => (phone = e.target.value)} />
        <input type='password' placeholder='password' onChange={(e) => (pass = e.target.value)} />
        <button onClick={onclicking}>Signup</button>


      </form>
    </div>
  )
}

export default Signupform
