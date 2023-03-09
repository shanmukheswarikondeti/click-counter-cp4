// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="span-text">{count}</span>
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button
          type="button"
          className="button"
          onClick={this.onIncrementCount}
        >
          Click me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
