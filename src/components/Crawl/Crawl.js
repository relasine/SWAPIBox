import React, {Component} from 'react';
import './Crawl.css';
import PropTypes from 'prop-types';


class Crawl extends Component {
  constructor() {
    super()
    this.state = {
      thumbprint: '',
      securing: '',
      handshake: '',
      welcome: '',
      briefing: '',
      fadeWelcome: '',
      hideWelcome: '',
      showCrawl: '',
      ready: false,
    }
  }

  checkReady = () => {
    if (this.state.ready) {
      this.setState({
        showCrawl: 'show-crawl',
        hideWelcome: 'hide-welcome'
      })
    }
  }

  handleFingerPrint = async () => {
    await this.setState({thumbprint: 'active-thumbprint'})
    await setTimeout(this.printConnect, 500);
    await setTimeout(this.printHandshake, 2500);
    await setTimeout(this.printWelcome, 5000);
    await setTimeout(this.printBriefing, 6500)
    await setTimeout(this.props.setReady, 6500);
  }

  printConnect = async () => {
    await this.setState({securing: 'print-securing'})
  }

  printHandshake = async () => {
    await this.setState({handshake: 'print-handshake'})
  }

  printWelcome = async () => {
    await this.setState({welcome: 'print-welcome'})
  }

  printBriefing = async () => {
    await this.setState({
      briefing: 'print-briefing',
      ready: true
    })
  }


  render() {
    return (
      <aside onClick={() => {this.checkReady()}}>
        <section className='header-section'>
          <div className='header-logo-wrapper'>
            <i className='fab fa-jedi-order header-logo'></i>
          </div>
        </section>
        <main className={`main-landing-section ${this.state.fadeWelcome} ${this.state.hideWelcome}`}>
          <section className='landing-loading'>
            <h3>Imprint thumb to connect</h3>
          </section>
          <h3 
            data-text='Securing connection...' 
            className={`securing ${this.state.securing}`}
          >
            Securing connection...
          </h3>
          <h3 
            className={`handshake ${this.state.handshake}`}
            data-text='Handshake successful!'
          >
            Handshake successful.
          </h3>
          <h3 
            className={`welcome ${this.state.welcome}`}
            data-text='Welcome, Master Jedi'
          >
            Welcome, Master Jedi.
          </h3>
          <div 
            className={`thumbprint ${this.state.thumbprint}`}
            onClick={() => {this.handleFingerPrint()}}
          >
            <img src={'./fingerprint.png'} alt='fingerprint' />
          </div>
          <h2 
            data-text='Tap to receive briefing'
            className={`briefing ${this.state.briefing}`}
          >
            Tap to receive briefing
          </h2>
        </main>
        <main className={`crawl-text-wrapper ${this.state.showCrawl}`}>
          <h2>Situation Briefing</h2>
          <p>{this.props.film.opening_crawl}</p>
          <p className='smol-text'>Briefing Title: <span>{this.props.film.title}</span></p>
          <p className='smol-text'>Galaxy Date: <span>{this.props.film.episode_id}</span></p>
        </main>
      </aside>
    );
  }
}
  

Crawl.propTypes = {
  film: PropTypes.object.isRequired
};

export default Crawl;