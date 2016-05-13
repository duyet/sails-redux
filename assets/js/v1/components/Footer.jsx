define(['react', '../containers/FilterLink'], function (React, FilterLink) {
  // const { PropTypes } = React

  const Footer = () => (
    <footer className="medica-footer" role="contentinfo">
      <div className="container">
        <ul className="footer-links">
          <li>
            <a href="https://github.com/twbs/bootstrap">GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/getbootstrap">Twitter</a>
          </li>
          <li>
            <a href="../getting-started/#examples">Examples</a>
          </li>
        </ul>
        <p>(c) 2016</p>
      </div>
    </footer>
  )

  return Footer
})
