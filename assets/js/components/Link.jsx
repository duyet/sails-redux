define(['react'], function(React) {
  const { PropTypes } = React

  const Link = ({ active, children, onClick }) => {
    if (active) {
      return <span>{children}</span>
    }

    return (
      <a href='#'
         onClick={e => {
           e.preventDefault()
           onClick()
         }}
      >
        {children}
      </a>
    )
  }

  Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }

  return Link
})
