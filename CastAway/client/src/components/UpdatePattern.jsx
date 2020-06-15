import React, { Component } from 'react'

export default class UpdatePattern extends Component {

  state = {
    name: "",
    difficulty: "",
    yarn: "",
    needle_size: "",
    gauge: ""
  }

  componentDidMount() {
    if (this.props.pattern) {
      this.SetPattern()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pattern !== this.props.pattern) {
      this.setPattern()
    }
  }

  setProject = () => {
    const { name, difficulty, yarn, needle_size, gauge } = this.props.project
    this.setState({ name, difficulty, yarn, needle_size, gauge })
  }

  // componentDidUpdate = () => {
  //   if (!this.state.pattern && this.props.patterns.length) {
  //     this.setState({
  //       pattern: this.props.patterns[0].id
  //     })
  //   }
  // }
  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      name: value,
      difficulty: value,
      yarn: value,
      needle_size: value,
      gauge: value
    })
  }

  render() {
    const { name, difficulty, yarn, needle_size, gauge, pattern } = this.state
    const { putPattern, history, patterns } = this.props
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        // const {
        //   pattern,  ...project.id 
        // } = this.state
        putPattern(pattern.id, this.state);
        history.push('/patterns');
        this.setState({
          name: "",
          difficulty: "",
          yarn: "",
          needle_size: "",
          gauge: ""
        })
      }}>

        <h2>EDIT PROJECT</h2>
        <div className='form-content'>

          <label htmlFor="name">NAME:
        <input
              id="id"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="difficulty">DIFFICULTY:
        <input
              id="id"
              type="text"
              value={difficulty}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="yarn">YARN:
        <input
              id="id"
              type="text"
              value={yarn}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="needle_size">NEEDLE_SIZE:
        <input
              id="id"
              type="text"
              value={needle_size}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="gauge">GAUGE:
        <input
              id="id"
              type="text"
              value={gauge}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button>Update</button>
        </div>
      </form>
    )
  }
}
