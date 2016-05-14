define(['react', '../containers/FilterLink'], function (React, FilterLink) {
  // const { PropTypes } = React

  const Footer = () => (
    <footer className="medica-footer" role="contentinfo">
      <div className="container">
        <ul className="footer-links">
          <li>
            <a href="#">Terms</a>  
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
        <p>(c) 2016</p>
      </div>
    </footer>
  )

  return Footer
})
