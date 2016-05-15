define(['react', 'react-router', '../../Actions'], function(React, ReactRouter, Actions) {
  const { PropTypes, Component } = React
  const { History } = ReactRouter
  const { changeForm } = Actions

  const assign = Object.assign;

  class LoginForm extends Component {
    render() {
      return(
          <form className='form'>
            <h4 className='form-heading'>Please sign in</h4>
            <label htmlFor='inputEmail' className='sr-only'>Email address</label>
            <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required autofocus />
            <label htmlFor='inputPassword' className='sr-only'>Password</label>
            <input type='password' id='inputPassword' className='form-control' placeholder='Password' required />
            <div className='checkbox'>
              <label>
                <input type='checkbox' defaultValue='remember-me' /> Remember me
              </label>
            </div>
            <button className='btn btn-lg btn-primary btn-block' type='submit'>Sign in</button>
          </form>
      );
    }
  }

  LoginForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    //data: React.PropTypes.object.isRequired
  }

return LoginForm
})
