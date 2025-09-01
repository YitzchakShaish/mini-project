import React, { useEffect } from 'react'

export default function HelloOperator() {

    useEffect(() =>{
        console.log("Mounted")
    },[])
  return (
    <>
    <h4>Hello Operator</h4>
    </>
  )
}
