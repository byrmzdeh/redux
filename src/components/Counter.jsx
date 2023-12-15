import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from '../redux/CounterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementByAmount(5))}
        >
          -
        </button>
      </div>
    </div>
  )
}
export default Counter
