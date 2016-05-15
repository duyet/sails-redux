define(['react', 'react-router', '../../Actions'], function(React, ReactRouter, Actions) {
  const { PropTypes, Component } = React
  const { History } = ReactRouter
  const { changeForm } = Actions

  class LoginForm extends Component {
    constructor(props) {
      super(props);
      // this.onChange = this.onChange.bind(this)
      const redirectRoute = this.props.location.query.next || '/auth/login';
      this.state = {
        email: '',
        password: '',
        remember: true,
        redirectTo: redirectRoute
      }
    }

    login(e) {
      e.preventDefault();
      this.props.actions.loginUser(this.state.email, this.state.password, this.state.redirectTo);
    }

    handleChangeEmail(e) {
      this.setState({email: e.target.value});
    }

    handleChangePassword(e) {
      this.setState({email: e.target.value});
    }

    // handleChange (field) {
    //   this.setState({[ field ] : event.target.value});
    // }

    render() {
      return(
          <form className='form'>
            <h4 className='form-heading'>Please sign in</h4>
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

            <div className='checkbox'>
              <label>
                <input type='checkbox' defaultValue='remember-me' /> Remember me
              </label>
            </div>
            <button  
              className='btn btn-lg btn-primary btn-block' 
              type='submit'
              disabled={this.props.isAuthenticating}
              onClick={this.login.bind(this)}>Sign in</button>
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
