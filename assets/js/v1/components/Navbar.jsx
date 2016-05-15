define(['react'], function(React) {
  var Navbar = () => (
    <nav className='collapse navbar-collapse navigation' id='bs-example-navbar-collapse-1' role='navigation'>
      <ul className='nav navbar-nav navbar-right '>
        <li><a href='#topics'>Topics</a> </li>
        <li><a href='#explore'>Explore</a> </li>
        <li><a href='#help'>Help</a> </li>
        <li><a href='#about'>About </a> </li>
      </ul>
    </nav>
  )

  return Navbar
})
