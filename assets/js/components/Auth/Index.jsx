define(['react', 'react-router', '../../Rest', '../../Store', './Login', './Register'], 
function(React, ReactRouter, Rest, Store, Login, Register) {
  const { PropTypes, Component } = React
  const { Router, Route, browserHistory, Link } = ReactRouter

  class Home extends Component {
    componentDidMount() {

    }

    _login(username, password) {
      console.log('ok login')
    }

    _register(username, password) {
      console.log('ok login')
    }

    render() {
      return (
        <div className='auth wrap'>

          <Router history={browserHistory}>
            <Route path='/auth/register' component={Register}></Route>
            <Route path='/auth*' component={Login}></Route>
          </Router>

          <div className='row text-center' style={{ marginTop: 60 }}>
            <Link to='/auth/login'>Login</Link> or <Link to='/auth/register'>Register</Link> 
          </div>

          
        </div>

      );
    }
  }

  return Home
})
