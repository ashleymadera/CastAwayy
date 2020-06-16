import React, { Component } from 'react';

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, email, password } = this.state;
    const { handleRegisterSubmit, history } = this.props;
    return (
      <>
        <h2 className='project-form' >Register</h2>

        <form onSubmit={(e) => {
          e.preventDefault();
          handleRegisterSubmit(this.state);
          history.push('/');
          this.setState({
            username: "",
            email: "",
            password: ""
          })
        }}>

          <div className='form-content'>
            <h2>BECOME A MEMBER</h2>
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
            <label htmlFor="email">email:
            <br />
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
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
            <br />            <button>Submit</button>
          </div>
        </form>
      </>
    )
  }
}
