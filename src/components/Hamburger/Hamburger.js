import React, {Component} from 'react';

import './Hamburger.css';

class Hamburger extends Component {
  constructor() {
    super()

    this.state = {
      topToggled: '',
      middleToggled: '',
      bottomToggled: '',
      topBladeToggled: '',
      middleBladeToggled: '',
      bottomBladeToggled: '',
      gripToggled: ''
    }
  }

  handleHamburger = () => {
    if (this.state.topToggled === '') {
      console.log('poo');
      this.setState({
        topToggled: 'top-toggled',
        middleToggled: 'middle-toggled',
        bottomToggled: 'bottom-toggled',
        topBladeToggled: 'top-blade-toggled',
        middleBladeToggled: 'middle-blade-toggled',
        bottomBladeToggled: 'bottom-blade-toggled',
        gripToggled: 'grip-toggled'
      })
    } else {
      this.setState({
        topToggled: '',
        middleToggled: '',
        bottomToggled: '',
        topBladeToggled: '',
        middleBladeToggled: '',
        bottomBladeToggled: '',
        gripToggled: ''
      }) 
    }
  }

  render() {
    return(
      <section 
        className='lightsaburger'
        onClick={() => {
          this.handleHamburger()
        }}
      >
        <div className={`top ${this.state.topToggled}`}>
         <div className={`top-blade blade ${this.state.topBladeToggled}`}></div>
         <div className={`top-grip grip ${this.state.gripToggled}`}></div>
        </div>
        <div className={`middle ${this.state.middleToggled}`}>
          <div className={`middle-grip grip ${this.state.gripToggled}`}></div>
          <div className={`middle-blade blade ${this.state.middleBladeToggled}`}></div>
        </div>
        <div className={`bottom ${this.state.bottomToggled}`}>
         <div className={`bottom-blade blade ${this.state.bottomBladeToggled}`}></div>
         <div className={`bottom-grip grip ${this.state.gripToggled}`}></div>
        </div>
      </section>
    )
  }
}

export default Hamburger