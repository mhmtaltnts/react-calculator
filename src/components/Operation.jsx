import React from 'react'

const Operation = ({ className, operation, addOperation}) => {
  return (
    <button className={className} operation={operation} onClick={() => addOperation(operation)} >{operation}</button>
  )
}

export default Operation