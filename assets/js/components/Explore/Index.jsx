define(['react'], function(React) {
  const { PropTypes } = React

  const Content = ({ active, children }) => {
    return (
    	<div className='wrap'>
			<h1>Explore</h1>
		</div>
    )
  }

  Content.propTypes = {
  }

  return Content
})
