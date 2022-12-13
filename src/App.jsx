
import { useReducer, useState } from 'react'
import './App.css'
import Digit from './components/Digit'
import Operation from './components/Operation'


function App() { 
  const [predigit, setPredigit] = useState("")
  const [currentdigit, setCurrentdigit] = useState("")
  const [operation, setOperation] = useState("")

  const addDigit = (digit) => {    
      setCurrentdigit(prev => prev + digit)    
  }

  const addPeriod = (digit) => {
    if (!currentdigit.includes(digit)){
      setCurrentdigit(prev => prev + digit)
    }else{
      setCurrentdigit(prev => prev)
    }
  }

  const addOperation = (operation) => {
    setOperation(prev => prev = operation)
    setPredigit(prev => prev = currentdigit)
    setCurrentdigit("")
  }

  const handleEquation = () => {
    let equation
    if(currentdigit >= 0 && operation==="") return
    if(predigit >= 0 && operation !== "" && currentdigit === "") return 
    if(parseFloat(predigit) === 0 && parseFloat(currentdigit) === 0 && operation=== "/") return setCurrentdigit("undefined")
    if(operation==="*") equation = parseFloat(predigit) * parseFloat(currentdigit)
    if(operation==="/") equation = parseFloat(predigit) / parseFloat(currentdigit)
    if(operation==="+") equation = parseFloat(predigit) + parseFloat(currentdigit)
    if(operation==="-") equation = parseFloat(predigit) - parseFloat(currentdigit)
    setCurrentdigit(equation)
    setPredigit("")
    setOperation("")
  }

  const handleClear = () => {
    setCurrentdigit(prev => prev = "")
    setPredigit(prev => prev = "")
    setOperation(prev => prev = "")
  }

  const handleDel = () => {
    if(currentdigit.length >= 1){
      setCurrentdigit(prev => prev.substring(0, prev.length-1))     
    } else if(currentdigit.length === 0 && operation.length === 1){
      setOperation("")
    } else if(currentdigit.length === 0 && operation.length === 0){
      setCurrentdigit(prev => prev = predigit)
      setPredigit("")
    }else{
      return
    }
  }

  return (
    
      <div className="calculator-grid">
        <div className='output'>
          <div className="previous-operand">{predigit}{operation}</div>
          <div className="current-operand">{currentdigit}</div>
        </div>
        <div className='button-container'>
          <button className='span-two' onClick={handleClear}>CLEAR</button>
          <button onClick={handleDel}>DEL</button>
          <Operation operation={"/"} addOperation={(operation) => addOperation(operation)} />
          <Digit digit={"1"} addDigit={(digit) => addDigit(digit)} />
          <Digit digit={"2"} addDigit={(digit) => addDigit(digit)} />
          <Digit digit={"3"} addDigit={(digit) => addDigit(digit)} />
          <Operation operation={"*"} addOperation={(operation) => addOperation(operation)} />
          <Digit digit={"4"} addDigit={(digit) => addDigit(digit)} />
          <Digit digit={"5"} addDigit={(digit) => addDigit(digit)} />
          <Digit digit={"6"} addDigit={(digit) => addDigit(digit)} />
          <Operation operation={"+"} addOperation={(operation) => addOperation(operation)} />
          <Digit digit={"7"} addDigit={(digit) => addDigit(digit)} />
          <Digit digit={"8"} addDigit={(digit) => addDigit(digit)} />
          <Digit digit={"9"} addDigit={(digit) => addDigit(digit)} />
          <Operation operation={"-"} addOperation={(operation) => addOperation(operation)} />
          <Digit digit={"."} addDigit={(digit) => addPeriod(digit)} />
          <Digit digit={"0"} addDigit={(digit) => addDigit(digit)} />
          <button className='span-two' onClick={handleEquation}>=</button>
        </div>
      </div>
    
  )
}

export default App
