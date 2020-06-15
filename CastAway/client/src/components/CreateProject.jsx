import React, { Component } from 'react'

export default class CreateProject extends Component {

  state = {
    title: "",
    garment_type: "",
    instruction: "",
    image_url: "",
    pattern: ""
  }

  //default  pattern in drop down

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
    const { title, garment_type, instruction, image_url } = this.state
    const { postProject, history, patterns } = this.props


    return (
      <>
        <h2 className='project-form'>CREATE A PROJECT</h2>

        <form onSubmit={(e) => {
          e.preventDefault()
          const {
            pattern, ...projectData
          } = this.state
          postProject(projectData, pattern)
          history.push('/projects')
          this.setState({
            title: "",
            garment_type: "",
            instruction: "",
            image_url: "",
            pattern: ""
          })
        }}>
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
            <button>Create</button>

          </div>
        </form>

      </>
    )
  }
}
