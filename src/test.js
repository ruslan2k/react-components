import React from 'react'
import { LoginForm } from './index'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <LoginForm onLogin={()=>console.log(1)}/>,
  document.getElementById('root')
)
