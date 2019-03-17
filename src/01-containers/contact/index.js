import React from 'react';
import './index.css';

export default class ContactContainer extends React.Component {
  
  state = {
    name: '',
    surname: '',
    email: '',
    password: '',
    sent: false,
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ sent: true});
  }

  handleInputChange({currentTarget: { name, value }}) {
    this.setState({
      [name]: value
    });
  }

  handleResetClick(e) {
    e.preventDefault();
    this.setState({
      name: '',
      surname: '',
      email: '',
      password: '',
      sent: false,
    });
  }

  isFormValid() {
    const {name, surname, email, password} = this.state;
    return !(name && surname && email && password);
  }

  renderButtons() {
    return this.state.sent ?
      <button onClick={this.handleResetClick.bind(this)} type="reset">
        Reset <span role="img" aria-label="reset">🔄</span>
      </button> :
      <button type="submit" disabled ={this.isFormValid()}>
        Send <span role="img" aria-label="rocket">🚀</span>
      </button>
  }

  render() {
    return (
      <section>
        <h1>Contact Form</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-field">
            <label htmlFor="name">Name </label>
            <input
              autoComplete="false"
              type="text"
              id="name"
              name="name"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.name}/>
          </div>
          <div className="form-field">
            <label htmlFor="surname">Surname </label>
            <input
              autoComplete="false"
              type="text"
              id="surname"
              name="surname"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.surname}/>
          </div>
          <div className="form-field">
            <label htmlFor="email">Email </label>
            <input
              autoComplete="false"
              type="email"
              id="email"
              name="email"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.email}/>
          </div>
          <div className="form-field">
            <label htmlFor="password">Password </label>
            <input
              autoComplete="false"
              current-password="true"
              type="password"
              id="password"
              name="password"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.password}/>
          </div>
          {this.renderButtons()}
        </form>
        {this.state.sent ? <p>Then info was sent.</p> : null}
      </section>
    );
  }
}
