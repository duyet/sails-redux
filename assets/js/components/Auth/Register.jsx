define(['react'], function(React) {
	const { PropTypes } = React

	const Content = ({ active, children }) => {
		return (
          <form className='form'>
            <h4 className='form-heading'>Register</h4>
            <label htmlFor='inputEmail' className='sr-only'>Email address</label>
            <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required autofocus />
            <label htmlFor='inputPassword' className='sr-only'>Password</label>
            <label htmlFor='inputPassword' className='sr-only'>Password</label>
            <input type='password' id='inputPassword' className='form-control' placeholder='Repeat' required />
            <div className='checkbox'>
              <label>
                <input type='checkbox' defaultValue='remember-me' /> Remember me
              </label>
            </div>
            <button className='btn btn-lg btn-primary btn-block' type='submit'>Sign in</button>
          </form>
		)
	}

	return Content
})
