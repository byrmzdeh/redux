import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/CounterSlice'
import todoReducer from './redux/TodoSlice'
import calculatorReducer from './redux/CalculatorSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    calculator : calculatorReducer
  },
})