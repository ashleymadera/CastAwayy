import React, { Component } from 'react'

export default class UpdatePattern extends Component {

  state = {
    name: "",
    difficulty: "",
    yarn: "",
    needle_size: "",
    gauge: ""
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pattern !== this.props.pattern) {
      this.setPattern()
    }
  }

  setPattern = () => {
    const { name, difficulty, yarn, needle_size, gauge } = this.props.pattern
    this.setState({ name, difficulty, yarn, needle_size, gauge })
  }

  // componentDidUpdate = () => {
  //   if (!this.state.pattern && this.props.patterns.length) {
  //     this.setState({
  //       pattern: this.props.patterns[0].id
  //     })
  //   }
  // }
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
    const { name, difficulty, yarn, needle_size, gauge, pattern } = this.state
    const { putPattern, history } = this.props
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        const {
          pattern, ...patternData
        } = this.state

        putPattern(this.props.pattern.id, patternData);
        history.push('/pattern');
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
          <button>Update</button>
        </div>
      </form>
    )
  }
}
