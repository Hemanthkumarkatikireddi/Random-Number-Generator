// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {rNumber: 0}

  onClickGenerate = () => {
    this.setState(() => ({rNumber: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {rNumber} = this.state
    return (
      <div className="main-container">
        <div className="content-container">
          <div className="card-container">
            <h1 className="heading">Random Number</h1>
            <p className="description">
              Generate a random number in the range of 0 to 100
            </p>
            <button
              className="button"
              type="button"
              onClick={this.onClickGenerate}
            >
              Generate
            </button>
            <p className="random-number">{rNumber}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
