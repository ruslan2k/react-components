import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

import { Model, LoginForm } from './index'

const Home = () => <h3>Home</h3>
const UserInfo = ({ match }) => {
  const userId = match.params.userId
  return (
    <div>
      <h3>User Info</h3>
      <p>id: {userId}</p>
    </div>
  )
}
const UsersList = (props) => {
  console.log(props);
  return <h3>UsersList</h3>;
}

const Users = (props) => (
  <div>
    <Route exact path='/users' component={UsersList} />
    <Route path='/users/:userId' component={UserInfo} />
  </div>
)
const UserView = () => <h3>UserView</h3>

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/'>[Home]</Link>
        <Link to='/users'>[Users]</Link>
        <Link to='/users/name'>[User Vasya]</Link>
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
