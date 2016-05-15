define(['react', 'react-router'], function(React, ReactRouter) {
  const { Link } = ReactRouter

  var Navbar = () => (
    <nav className='collapse navbar-collapse navigation' id='bs-example-navbar-collapse-1' role='navigation'>
      <ul className='nav navbar-nav navbar-right '>
        <li><Link to={`/topics`}>Topics</Link> </li>
        <li><Link to='/explore'>Explore</Link> </li>
        <li><Link to='/help'>Help</Link> </li>
        <li><Link to='/about'>About </Link> </li>
        <li><Link to='/auth'>Login / Register</Link> </li>
      </ul>
    </nav>
  )

  return Navbar
})
