define(['react'], function (React) {
  const Header = (prop) => (
    <header id='section_header' className='navbar-fixed-top main-nav' role='banner'>
      <div className='container'>
        {/* <div class='row'> */}
        <div className='navbar-header '>
          <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <a className='navbar-brand' href='#'>
            m
          </a>
        </div>{/*Navbar header End*/}
        <nav className='collapse navbar-collapse navigation' id='bs-example-navbar-collapse-1' role='navigation'>
          <ul className='nav navbar-nav navbar-right '>
            <li className='active'><a href='#'>Home </a></li>
            <li><a href='#explore'>Explore</a> </li>
            <li><a href='#help'>Help</a> </li>
            <li><a href='#about'>About </a> </li>
          </ul>
        </nav>
      </div>{/* /.container-fluid */}
    </header>
  )

  return Header
})
