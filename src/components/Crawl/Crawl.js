import React, {Component} from 'react';
import './Crawl.css';
import PropTypes from 'prop-types';
import Error from '../Error/ErrorPage';
import Briefing from '../Briefing/Briefing';
import Loading from '../Loading/Loading'

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
      error: ''
    }
  }

  checkReady = () => {
    if (this.state.ready && !this.props.error) {

      this.setState({
        showCrawl: 'show-crawl',
        hideWelcome: 'hide-welcome'
      })

      if (window.innerWidth > 475 && this.props.hamburger.status === 'closed') {
        this.props.hamburgerChange();
      }

    } else if (this.state.ready && this.props.error) {
      this.setState({
        error: 'display-crawl-error',
        hideWelcome: 'hide-welcome'
      })
    }
  }

  handleFingerPrint = async () => {
    await this.setState({thumbprint: 'active-thumbprint'})
    await setTimeout(this.printConnect, 500);
    await setTimeout(this.printHandshake, 2500);
    await setTimeout(this.printWelcome, 5000);
    await setTimeout(this.printBriefing, 6500);
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
      <aside 
        onClick={() => {this.checkReady()}}
        aria-label='landing-screen'
      >
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
        <main 
          className={`crawl-text-wrapper ${this.state.showCrawl}`}
          aria-label='post-login-screen'
        >
          {!this.props.loading && <Briefing 
            crawl={this.props.film.opening_crawl}
            title={this.props.film.title}
            id={this.props.film.episode_id}
          />}
          {this.props.loading && <Loading />}

        </main>
        <Error errorState={this.state.error}/>
      </aside>
    );
  }
}
  
Crawl.propTypes = {
  film: PropTypes.object.isRequired,
  setReady: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Crawl;