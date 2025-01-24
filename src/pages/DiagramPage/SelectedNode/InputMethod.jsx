import React, { useEffect, useState } from 'react'
import { SelectOption } from '../SelectOption';

export const InputMethod = ({ index, method, onChange, onDelete }) => {
  const [methodName, setMethodName] = useState("");
  const [params, setParams] = useState("");
  const [returnType, setReturnType] = useState("");

  useEffect(() => {
      setMethodName(method.name);
      setParams(method.params);
      setReturnType(method.returnType);
  }, [method])

  const handleMethodChange = (event) => {
      setMethodName(event.target.value);
      onChange(index, 'name', event.target.value);
  };

  const handleParamsChange = (event) => {
      setParams(event.target.value);
      onChange(index, 'params', event.target.value);
  };

  const handleReturnTypeChange = (event) => {
      setReturnType(event.target.value);
      onChange(index, 'returnType', event.target.value);
  };

  return (
      <div>
          <input 
              type="text" 
              onChange={handleMethodChange} 
              value={methodName} 
              className='w-20.5 bg-[#F8E6BCFF] rounded border border-gray-400' 
          />
          <input 
              type="text" 
              onChange={handleParamsChange} 
              value={params} 
              placeholder="params"
              className='w-20 bg-[#F8E6BCFF] rounded border border-gray-400' 
          />
          <input 
              type="text" 
              onChange={handleReturnTypeChange} 
              value={returnType} 
              placeholder="return type"
              className='w-20 bg-[#F8E6BCFF] rounded border border-gray-400' 
          />
          <button onClick={() => onDelete(index)} className='mx-1 bg-red-600 rounded px-1'>
              Delete
          </button>
      </div>
  )
}
