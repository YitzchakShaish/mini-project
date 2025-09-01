import { useEffect, useState } from 'react'

import './App.css'
import HelloOperator from './components/HelloOperator';
import Counter from './components/Counter';
import Api from './components/Api';
import Stoper from './components/Stoper';
import FullName from './components/FullName';

function App() {



  return (
    <>
      <h1>Welcome to the app</h1>
      <HelloOperator></HelloOperator>
      <Counter></Counter>
      <Api></Api>
      <Stoper></Stoper>
      <FullName></FullName>
     
    </>
  )
}

export default App
