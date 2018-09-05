import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LoginForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.onLogin}>
        <label for='email'>Email</label>
        <input type='text' name='email' />
        <label for='password'>Password</label>
        <input type='password' name='password' />
      </form>
    )
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func
}

export default LoginForm
