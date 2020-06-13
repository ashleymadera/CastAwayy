import React, { Component } from 'react'
import { getAllPatterns } from "../services/patterns"

export default class CreateProject extends Component {

  state = {

    title: '',
    garmentType: '',
    patterns: [],
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
      imageURL: value
    })
  }

  render() {
    const { title, garmentType, instruction, imageURL, patterns } = this.state
    const { postProject, history } = this.props
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
        <br />

        {/* Reserve for Drop down */}
        <label htmlFor="patterns">PATTERN:
        <input
            id="id"
            type="text"
            value={patterns}
            onChange={this.handleChange}
          />
        </label>


        <br />
        <label htmlFor="imageURL">IMAGE:
        <input
            id="id"
            type="text"
            value={imageURL}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button>Create</button>
      </form>
    )
  }
}
