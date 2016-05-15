define(['react', 'react-router', '../../Actions'], function(React, ReactRouter, Actions) {
  const { PropTypes, Component } = React
  const { History } = ReactRouter
  const { changeForm } = Actions

  class LoginForm extends Component {
    constructor(props) {
      super(props);
      // this.onChange = this.onChange.bind(this)
      const redirectRoute = this.props.location.query.next || '/auth/register';
      this.state = {
        email: '',
        password: '',
        repassword: '',
        remember: true,
        redirectTo: redirectRoute
      }
    }

    login(e) {
      e.preventDefault();
      this.props.actions.registerUser(this.state.email, this.state.password, this.state.redirectTo);
    }

    handleChangeEmail(e) {
      this.setState({email: e.target.value});
    }

    handleChangePassword(e) {
      this.setState({email: e.target.value});
    }

    render() {
      return(
          <form className='form'>
            <h4 className='form-heading'>Register</h4>
            {this.props.statusText ? <div className='alert alert-info'>{this.props.statusText}</div> : ''}
            
            <label htmlFor='inputEmail' className='sr-only'>Email address</label>
            <input type='email' 
              id='inputEmail' 
              className='form-control' 
              placeholder='Email address' 
              onChange={this.handleChangeEmail.bind(this)}
              required 
              autofocus />

            <label htmlFor='inputPassword' className='sr-only'>Password</label>
            <input type='password' 
              id='inputPassword' 
              className='form-control' 
              placeholder='Password' 
              onChange={this.handleChangePassword.bind(this)}
              required />

            <label htmlFor='inputPassword' className='sr-only'>Repeat</label>
            <input type='password' 
              id='inputRePassword' 
              className='form-control' 
              placeholder='Repeat' 
              onChange={this.handleChangePassword.bind(this)}
              required />

            <button  
              className='btn btn-lg btn-primary btn-block' 
              type='submit'
              disabled={this.props.isAuthenticating}
              onClick={this.login.bind(this)}>Register</button>
          </form>
      );
    }
  }

  LoginForm.propTypes = {
    // onSubmit: React.PropTypes.func.isRequired,
    // data: React.PropTypes.object.isRequired
  }

return LoginForm
})
