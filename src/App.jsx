import React from 'react'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Calculator from './components/Calculator'

const App = () => {
  return (
    <div>
      <Counter/>
      <hr />
      <br />
      <br /><br /><br />
      <Todo/>
      <hr />
      <br /><br /><br />
      <Calculator/>
    </div>
  )
}

export default App
