define(['react', './Navbar'], function (React, Navbar) {
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
        </div>
        <Navbar />
      </div>{/* /.container-fluid */}
    </header>
  )

  return Header
})
