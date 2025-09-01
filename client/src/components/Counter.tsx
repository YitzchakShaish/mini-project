import React, { useEffect, useState } from 'react'

export default function Counter() {
const [counter, setCounter] = useState(0);

useEffect(()=>{
    console.log(counter)

},[counter])

  return (
    <>
    <div>Counter</div>
    <button onClick={() => {setCounter(counter+1)}}>+1</button>
    </>
  )
}
