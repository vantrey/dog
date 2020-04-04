import React from 'react';
import './App.css';
import img from './dog.jpg'
import voice from './dog.mp3'

class App extends React.Component {

  state = {
    index: 0,
    counter: 0
  }

  componentDidMount() {
    setInterval(()=>{
      let index = this.getRandomImageIndex()
      this.setState({index})
    }, 3000)
  }

  getRandomImageIndex = () => {
    return Math.floor(Math.random() * 9);
  }
  player = new Audio(voice)

  onTargetClick = () => {
      this.setState({counter: this.state.counter + 1})
      this.player.play()
  }

  render = () => {
    const dogs = Array.from({length: 9}).map((el, i) => {
      let classForVisible
      if (this.state.index === i) {
        classForVisible =  'photo show'
        return (
          <div className="item"
               onClick={this.onTargetClick}
               id={i}
          >
            <img src={img} className={classForVisible}/>
          </div>
        )
      } else {
        classForVisible = 'photo'
        return (
          <div className="item"
               id={i}
          >
            <img src={img} className={classForVisible}/>
          </div>
        )
      }
    })

    return (
      <div className='wrapper'>
        {dogs}
        <div className="counter">
          {this.state.counter}
        </div>
      </div>
    )
  }
}

export default App;
