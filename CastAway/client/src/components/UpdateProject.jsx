import React, { Component } from 'react'

export default class UpdateProject extends Component {

  state = {
    title: "",
    garment_type: "",
    instruction: "",
    image_url: "",
    pattern: ""
  }

  componentDidMount() {
    if (this.props.project) {
      this.setProject()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.project !== this.props.project) {
      this.setProject()
    }
  }

  setProject = () => {
    const { title, garment_type, instruction, image_url, pattern } = this.props.project
    this.setState({ title, garment_type, instruction, image_url, pattern })
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

  handlePatternsChange = (e) => {
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
    const { putProject, history, patterns } = this.props
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        const {
          pattern, project, ...projectData
        } = this.state
        putProject(this.props.project.id, this.props.project.id, projectData);
        history.push('/project');
        this.setState({
          title: "",
          garment_type: "",
          instruction: "",
          image_url: "",
          pattern: ""
        })
      }}>

        <h2 className='project-form'>EDIT PROJECT</h2>
        <div className='form-content'>
          <label htmlFor="title">TITLE:
          <br />
            <input
              id="id"
              type="text"
              value={title}
              onChange={this.handleTitleChange}
            />
          </label>
          <label htmlFor="garment_type">GARMENT TYPE:
          <br />
            <input
              id="id"
              type="text"
              value={garment_type}
              onChange={this.handleGarmentTypeChange}
            />
          </label>
          <label htmlFor="instruction">INSTRUCTIONS:
          <br />
            <input
              id="id"
              type="text"
              value={instruction}
              onChange={this.handleInstructionChange}
            />
          </label>

          {/* Reserve for Drop down */}
          <label htmlFor="pattern">PATTERN:
          <br />
            <select name="pattern" onChange={this.handlePatternsChange}>
              {
                patterns.map((result) =>
                  <option value={result.id} display={result.name}>{result.name}</option>)
              }
            </select>
          </label>

          <label htmlFor="image_url">IMAGE:
          <br />
            <input
              id="id"
              type="text"
              value={image_url}
              onChange={this.handleImageURLChange}
            />
          </label>
          <br />
          <button>Update</button>
        </div>
      </form>
    )
  }
}
