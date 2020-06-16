import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <>
        <h3 className='project-form'>Login</h3>

        <div className='form-content'>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleLoginSubmit(this.state);
            history.push('/');
            this.setState({
              username: "",
              password: ""
            })
          }}>
            <h2>WELCOME BACK!</h2>
            <label htmlFor="username">username:
            <br />
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label htmlFor="password">password:
            <br />
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button>Submit</button>
            <br />
            <Link to='/admin/register'>Not a member? Register</Link>
          </form>
        </div >
      </>
    )
  }
}
