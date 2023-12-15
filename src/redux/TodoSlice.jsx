import { createSlice } from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload)
    }, 
    removeTodo : (state, action) =>{
      const index= state.value.findIndex((todo)=>todo.id === action.payload)
        if (index !== -1) {
          state.value.splice(index,1)
          
        }
    }
  },
})

export const { addTodo , removeTodo  } = TodoSlice.actions

export default TodoSlice.reducer