import React from 'react'

const Child = ({data}) => {
  // const {data}=props;
  // console.log("child spread")
  return (
    <div>
      <h1>Child {data}</h1>
    </div>
  )
}

export default Child
