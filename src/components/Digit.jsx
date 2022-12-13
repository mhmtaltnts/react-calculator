import React from 'react'

const Digit = ({digit, addDigit}) => {
  return (
    <button onClick={() => addDigit(digit)}>{digit}</button>
  )
}

export default Digit