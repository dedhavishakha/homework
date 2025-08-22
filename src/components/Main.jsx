import React from 'react'
import Submain from './Submain'

const Main = (props) => {
  // console.log(props.data)
  // const onEventcall=(data)=>{
  //   console.log("event calling...", data);
  // }
  function onEventcall(data){
    // let data;
    console.log("event calling....",data);
  }
  const onEventchange=(e)=>{
    console.log(e.target.value)

  }

  return (
    <div>
      <h1>main parent</h1>
      <input type='text' onChange={onEventchange}/>
      {/* <input type='text' onChange={(event)=>{event.target.value}}/> */}

      <button onClick={()=>{onEventcall("text")}} >click event</button>
      <Submain data={"Winner"}></Submain>
    </div>
  )
}

export default Main
