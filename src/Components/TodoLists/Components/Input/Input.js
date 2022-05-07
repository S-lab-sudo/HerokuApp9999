import React, { useState } from 'react'
import './Input.css'
import Send from './send.png'

export default function Input({addTodo}) {
  const [todoText, setTodoText] = useState('')
  const handleTodoAdd=()=>{
    if(todoText.length===0){
      return alert("No todo to add");
    }
    let value={title:todoText,date:Date()}
    setTodoText('')
    return addTodo(value)
  }
  const haldleKeyPress=(e)=>{
    if(e.key==="Enter"){
      handleTodoAdd()
    }
  }
  return (
    <div className='inputTodo'>
      <input onKeyDown={haldleKeyPress} type="text" value={todoText} onChange={e=>setTodoText(e.target.value)} placeholder="Todo Text Here..."  />
      <button onClick={handleTodoAdd} ><img src={Send} width="30px" alt="" /></button>
    </div>
  )
}
