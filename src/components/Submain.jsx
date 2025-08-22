import React from 'react'
import Parent from './Parent'

const Submain = (props) => {
  // console.log(props.data)
  return (
    <div>
      <h1>Submain</h1>
      <Parent data={"Winner"}></Parent>
    </div>
  )
}

export default Submain
