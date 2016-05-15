define(['react', 'react-redux', 'react-router'], function(React, ReactRedux, ReactRouter) {
  const { Component } = React
  const { connect } = ReactRedux
  const { Link } = ReactRouter

  class Navbar extends Component {

    render () {
      return (
        <nav className='collapse navbar-collapse navigation' id='bs-example-navbar-collapse-1' role='navigation'>
          <ul className='nav navbar-nav navbar-right '>
            <li><Link to={`/topics`}>Topics</Link> </li>
            <li><Link to='/explore'>Explore</Link> </li>
            <li><Link to='/help'>Help</Link> </li>
            <li><Link to='/about'>About </Link> </li>
            { this.props.isAuthenticated
              ? <li><Link to='/logout'>Logout</Link> </li>
              : <li><Link to='/auth'>Login / Register</Link> </li>
            }
          </ul>
        </nav>
      )
    }
  }

  return Navbar
})
