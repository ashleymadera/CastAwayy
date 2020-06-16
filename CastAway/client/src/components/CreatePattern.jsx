import React, { Component } from 'react'

export default class CreatePattern extends Component {

  state = {
    name: "",
    difficulty: "",
    yarn: "",
    needle_size: "",
    gauge: ""
  }

  handleNameChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }
  handleDifficultyChange = (e) => {
    const { value } = e.target;
    this.setState({
      difficulty: value
    })
  }
  handleYarnChange = (e) => {
    const { value } = e.target;
    this.setState({
      yarn: value
    })
  }
  handleNeedleSizeChange = (e) => {
    const { value } = e.target;
    this.setState({
      needle_size: value
    })
  }
  handleGaugeChange = (e) => {
    const { value } = e.target;
    this.setState({
      gauge: value
    })
  }

  render() {
    const { name, difficulty, yarn, needle_size, gauge } = this.state
    const { postPattern, history } = this.props

    return (
      <>
        <h2 className='project-form'>CREATE A PATTERN</h2>
        <form classname="form" onSubmit={(e) => {
          e.preventDefault();
          const {
            ...patternData
          } = this.state
          postPattern(patternData);
          history.push('/patterns');
          this.setState({
            name: "",
            difficulty: "",
            yarn: "",
            needle_size: "",
            gauge: ""
          })
        }}>

          <div className='form-content'>

            <label htmlFor="name">NAME:
        <input
                id="id"
                type="text"
                value={name}
                onChange={this.handleNameChange}
              />
            </label>
            <br />
            <label htmlFor="difficulty">DIFFICULTY:
        <input
                id="id"
                type="text"
                value={difficulty}
                onChange={this.handleDifficultyChange}
              />
            </label>
            <br />
            <label htmlFor="yarn">YARN:
        <input
                id="id"
                type="text"
                value={yarn}
                onChange={this.handleYarnChange}
              />
            </label>
            <br />
            <label htmlFor="needle_size">NEEDLE_SIZE:
        <input
                id="id"
                type="text"
                value={needle_size}
                onChange={this.handleNeedleSizeChange}
              />
            </label>
            <br />
            <label htmlFor="gauge">GAUGE:
        <input
                id="id"
                type="text"
                value={gauge}
                onChange={this.handleGaugeChange}
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
