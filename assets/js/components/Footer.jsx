define(['react', 'react-router'], function (React, ReactRouter) {
  const { Component } = React
  const { Link } = ReactRouter

  class Footer extends Component {
    render() {
      return (
        <footer className="medica-footer" role="contentinfo">
          <div className="container">
            <ul className="footer-links">
              <li>
                <Link to='/terms'>Terms</Link>
              </li>
              <li>
                <Link to='/privacy'>Privacy</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/help'>Help</Link>
              </li>
            </ul>
            <p>(c) 2016</p>
          </div>
        </footer>
      )
    }
  }

  return Footer
})
