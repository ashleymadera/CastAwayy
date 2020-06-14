import React, { Component } from 'react'

export default class CreateProject extends Component {

  state = {
    title: '',
    garment_type: '',
    instruction: '',
    image_url: '',
    pattern: ''
  }

  componentDidUpdate = () => {
    if (!this.state.pattern && this.props.patterns.length) {
      this.setState({
        pattern: this.props.patterns[0].id
      })
    }
  }

  handleTitleChange = (e) => {
    const { value } = e.target
    this.setState({
      title: value
    })
  }
  handleGarmentTypeChange = (e) => {
    const { value } = e.target
    this.setState({
      garment_type: value
    })
  }
  handleInstructionChange = (e) => {
    const { value } = e.target
    this.setState({
      instruction: value
    })
  }

  handlePatternsChange = (e, whichState) => {
    const { value } = e.target

    this.setState({
      pattern: value
    })
  }

  handleImageURLChange = (e) => {
    const { value } = e.target
    this.setState({ image_url: value })
  }



  render() {
    const { title, garment_type, instruction, image_url, pattern } = this.state
    const { postProject, history, patterns } = this.props


    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        const {
          pattern, ...projectData
        } = this.state
        postProject(projectData, pattern)
        history.push('/projects')
        this.setState({
          pattern: '',
          title: '',
          garment_type: '',
          instruction: '',
          image_url: ''
        })
      }}>
        <hr />
        <h2>CREATE A PROJECT</h2>
        <label htmlFor="title">TITLE:
        <input
            id="id"
            type="text"
            value={title}
            onChange={this.handleTitleChange}
          />
        </label>
        <br />
        <label htmlFor="garment_type">GARMENT TYPE:
        <input
            id="id"
            type="text"
            value={garment_type}
            onChange={this.handleGarmentTypeChange}
          />
        </label>
        <br />
        <label htmlFor="instruction">INSTRUCTIONS:
        <input
            id="id"
            type="text"
            value={instruction}
            onChange={this.handleInstructionChange}
          />
        </label>
        <br />

        {/* Reserve for Drop down */}
        <label htmlFor="pattern">PATTERN:
         <select name="pattern" onChange={this.handlePatternsChange}>
            {
              patterns.map((result) =>
                <option value={result.id} display={result.name}>{result.name}</option>)
            }
          </select>
        </label>
        <br />
        <label htmlFor="image_url">IMAGE:
        <input
            id="id"
            type="text"
            value={image_url}
            onChange={this.handleImageURLChange}
          />
        </label>
        <br />
        <button>Create</button>
      </form>
    )
  }
}
