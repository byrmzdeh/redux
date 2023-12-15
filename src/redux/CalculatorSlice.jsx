import { createSlice } from '@reduxjs/toolkit'

export const CalculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        value: 0,
    },
    reducers: {
        add: (state, action) => {
            state.value = action.payload.number1 + action.payload.number2
        },
        subtract: (state , action) => {
            state.value = action.payload.number1 - action.payload.number2
        },
        multiply: (state, action) => {
            state.value = action.payload.number1 * action.payload.number2
        },
        divide: (state, action) => {
            state.value = action.payload.number1 / action.payload.number2
        },
        clear: (state)=>{
            state.value =0
        },
    },
})

export const { add, subtract, multiply, divide ,clear } = CalculatorSlice.actions

export default CalculatorSlice.reducer