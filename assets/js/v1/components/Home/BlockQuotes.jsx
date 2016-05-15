define(['react'], function(React) {

	const Block = React.createClass({
		render() {
			return (
				<div className='block'>
					<div className='quotation'>
						{this.props.text}
					</div>
				</div>
			)
		}
	})

	return () => {
		return (
            <div className='row block-quotes'>
              <div className='col-md-4'>
              	<Block text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' />
              </div>
              <div className='col-md-4'>
              	<Block text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' />
              </div>
              <div className='col-md-4'>
              	<Block text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' />
              </div>
            </div>
		)
	}
})