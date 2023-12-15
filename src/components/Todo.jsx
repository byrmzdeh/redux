import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../redux/TodoSlice'
import { v4 as uuidv4 } from 'uuid';


const Todo = () => {
    const todo = useSelector((state)=> state.todo.value)
    const dispatch = useDispatch()
    const [input , setInput] = useState('')
    
  return (
    <div>
        <h1>Todo</h1>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
        <button onClick={()=>{dispatch(addTodo({value : input , id: uuidv4()}));
        setInput('')
      }}>Add</button>
        {todo.map((x)=>(
          <li key={x.id}>{x.value}
          <button>Edit</button>
           <button onClick={()=>dispatch(removeTodo(x.id))}>Remove</button>
           </li>
        ))}
  
    </div>
  )
}

export default Todo
