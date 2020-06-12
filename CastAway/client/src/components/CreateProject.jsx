import React, { Component } from 'react'

export default class CreateProject extends Component {

  state = {
    patterns: [],
    title: '',
    garmentType: '',
    instruction: '',
    imageURL: ''

  }

  async componentDidMount() {
    const patterns = await getAllPatterns();
    this.setState({ patterns });
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      title: value,
      garmentType: value,
      instruction: value,
      imageUrl: value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        postProject(this.state)
        history.pushState('/projects')
        this.setState({
          patterns: [],
          title: '',
          garmentType: '',
          instruction: '',
          imageURL: ''
        })
      }}>
        <hr />
        <h2>CREATE A PROJECT</h2>
        <label htmlFor="title">TITLE:
        <input
            id="id"
            type="text"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="garmentType">GARMENT TYPE:
        <input
            id="id"
            type="text"
            value={garmentType}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="instruction">INSTRUCTIONS:
        <input
            id="id"
            type="text"
            value={instruction}
            onChange={this.handleChange}
          />
        </label>
      </form>
    )
  }
}
