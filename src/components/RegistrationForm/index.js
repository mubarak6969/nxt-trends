import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    nameU:"",
    username: '',
    password: '',
    emailF:"",
    email:"",
    invalidName:"",
    invalidUsername: '',
    invalidPassword: '',
    isRegistrationSuccess: true,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {username, password,nameU} = this.state
    if (nameU === '') {
        this.setState({
          invalidName: 'Required',
        })
      }
    if (username === '') {
      this.setState({
        invalidUsername: 'Required',
      })
    }
    if (password === '') {
      this.setState({invalidPassword: 'Required'})
    }
    if (username !== '' && password !== '' && nameU!=="") {
      this.setState({isRegistrationSuccess: false})
    }
  }

  eventHandlerFirst = event => {
    if (event.target.value === '') {
      this.setState({invalidUsername: 'Required'})
    }
    if (event.target.value !== '') {
      this.setState({invalidUsername: ''})
    }
  }

  eventHandlerLast = event => {
    if (event.target.value === '') {
      this.setState({invalidPassword: 'Required'})
    }
    if (event.target.value !== '') {
      this.setState({invalidPassword: ''})
    }
  }

  eventHandlerName=(event)=>{
    if (event.target.value === '') {
        this.setState({invalidName: 'Required'})
      }
      if (event.target.value !== '') {
        this.setState({invalidName: ''})
      }
  }

  onChangeName = event => {
    this.setState({nameU: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({emailF: event.target.value})
  }

  onResponseSubmit = () => {
    this.setState({isRegistrationSuccess: true, username: '', password: ''})
  }

  renderName = () => {
    const {invalidName, nameU} = this.state
    const inVal = invalidName !== '' ? 'outlineCol' : 'notOutline'
    return (
      <>
        <label htmlFor="nameU" className="label-elemnt">
            Name
        </label>
        <input
        onBlur={this.eventHandlerName}
          type="text"
          id="nameU"
          value={nameU}
          onChange={this.onChangeName}
          className={`inputElement name-f ${inVal}`}
          placeholder="name"
        />
        <p className="invalid-para">{invalidName}</p>
      </>
    )
  }

  renderUsername = () => {
    const {invalidUsername, username} = this.state
    const inVal = invalidUsername !== '' ? 'outlineCol' : 'notOutline'
    return (
      <>
        <label htmlFor="first-name" className="label-elemnt">
            USERNAME
        </label>
        <input
          onBlur={this.eventHandlerFirst}
          type="text"
          id="first-name"
          value={username}
          onChange={this.onChangeUsername}
          className={`inputElement ${inVal}`}
          placeholder="Username"
        />
        <p className="invalid-para">{invalidUsername}</p>
      </>
    )
  }


  renderPassword = () => {
    const {invalidPassword, password} = this.state
    const inVal = invalidPassword !== '' ? 'outlineCol' : 'notOutline'
    return (
      <>
        <label htmlFor="last-name" className="label-elemnt">
        PASSWORD
        </label>
        <input
          onBlur={this.eventHandlerLast}
          type="password"
          id="last-name"
          value={password}
          onChange={this.onChangePassword}
          className={`inputElement ${inVal}`}
          placeholder="Password"
        />
        <p className="invalid-para">{invalidPassword}</p>
      </>
    )
  }


  renderEmail = () => {
    const {emailF} = this.state
    return (
      <>
        <label htmlFor="Email" className="label-elemnt">
        Email
        </label>
        <input
          type="email"
          id="Email"
          value={emailF}
          onChange={this.onChangeEmail}
          className="inputElement"
          placeholder="Email"
        />
      </>
    )
  }

  render() {
    const {isRegistrationSuccess} = this.state

    return (
      <div className="bg-container">
        <h1 className="registration-heading">Registration</h1>
        {isRegistrationSuccess ? (
          <>
            <form className="card-container" onSubmit={this.onSubmitForm}>
            <div className="fullName">{this.renderName()}</div>
              <div className="fullName">{this.renderUsername()}</div>
              <div className="fullName">{this.renderPassword()}</div>
              <div className="fullName">{this.renderEmail()}</div>
              <button type="submit" className="button">
                Submit
              </button>
            </form>
          </>
        ) : (
          <form className="card-container" onSubmit={this.onResponseSubmit}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              className="successIcon"
              alt="success"
            />
            <p className="success-para">Submitted Successfully</p>
            <button type="submit" className="button-response">
              Submit Another Response
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm