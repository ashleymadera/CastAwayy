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
      this.SetProject()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.project !== this.props.project) {
      this.setProject()
    }
  }

  setProject = () => {
    const { title, garment_type, instruction, image_url, patterns } = this.props.project
    this.setState({ title, garment_type, instruction, image_url, patterns })
  }

  componentDidUpdate = () => {
    if (!this.state.pattern && this.props.patterns.length) {
      this.setState({
        pattern: this.props.patterns[0].id
      })
    }
  }
  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      title: value,
      garment_type: value,
      instruction: value,
      image_url: value,
      pattern: value
    })
  }

  render() {
    const { title, garment_type, instruction, image_url, pattern } = this.state
    const { putProject, history, project, patterns } = this.props
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        // const {
        //   pattern,  ...project.id 
        // } = this.state
        putProject(project.id, pattern, this.state);
        history.push('/projects');
        this.setState({
          title: "",
          garment_type: "",
          instruction: "",
          image_url: "",
          pattern: ""
        })
      }}>
        />
        <h2>EDIT PROJECT</h2>
        <label htmlFor="title">TITLE:
        <input
            id="id"
            type="text"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="garment_type">GARMENT TYPE:
        <input
            id="id"
            type="text"
            value={garment_type}
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
        <label htmlFor="pattern">PATTERN:
         <select name="pattern" onChange={this.handleChange}>
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
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button>Update</button>
      </form>
    )
  }
}
