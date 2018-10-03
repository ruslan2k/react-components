import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

import { Model, LoginForm } from './index'

const Users = () => <Model name='users' items={[1, 2, 3]} />
const Home = () => <h3>Home</h3>

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/'>[Home]</Link>
        <Link to='/users'>[Users]</Link>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Users} />
      </div>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
