import React, { useEffect, useState } from 'react'
import Input from './Components/Input/Input'
import Todos from './Components/Todos/Todos'
import './MainWindowTodo.css'
import dynamicTitle from '../../HelperFunctions/dT'

export default function TodoList() {

  const [todos, setTodos] = useState([])
  const [deletedTodos, setDeletedTodos] = useState([])

  // ADDING TODO
  const addTodo=(value=>{
    setTodos([...todos,value])
  })

  // REMOVING TODO
  const removeTodo=(value=>{
    setDeletedTodos([...deletedTodos,value])
    return setTodos(todos.filter(e=>e!==value))
  })

  // TITLE SETTING FOR TODO
  useEffect(()=>{
    dynamicTitle("Todo Lists")
  },[])

  return (
    <div className='mainWindowTodo' >
      <Todos todos={todos} deletedTodos={deletedTodos} removeTodo={removeTodo} />
      <Input addTodo={addTodo} />
    </div>
  )
}
