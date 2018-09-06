import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LoginForm extends Component {
  render () {
    const submit = (e) => {
      e.preventDefault()
      var email = document.querySelector('input[name="email"]').value
      var password = document.querySelector('input[name="password"]').value
      this.props.onLogin(email, password)
    }
    return (
      <form onSubmit={submit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='text' name='email' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired
}

export default LoginForm
