define(['react', 'react-router', './Navbar'], function (React, ReactRouter, Navbar) {
  const { Link } = ReactRouter
  
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
          <Link className='navbar-brand' to='/'>
            m
          </Link>
        </div>
        <Navbar />
      </div>{/* /.container-fluid */}
    </header>
  )

  return Header
})
