define(['react'], function(React) {

	const data = [
		{ title: 'Participate', list: [
			{ title: 'Submit a Case', url: '/submit' },
			{ title: 'Medical Cases', url: '/cases' }
		] },

		{ title: 'MedicaTalk', list: [
			{ title: 'About Us', url: '/submit' },
			{ title: 'Our Stories', url: '/cases' },
			{ title: 'Our Team', url: '/cases' },
			{ title: 'Our Blog', url: '/cases' }
		] },

		{ title: 'Support', list: [
			{ title: 'How It Works', url: '/submit' },
			{ title: 'FAQs', url: '/cases' },
			{ title: 'Contact Us', url: '/cases' }
		] }
	]

	const Column = React.createClass({
		render() {
			if (!this.props.data) return;

			const col = 'col-md-' + (this.props.col || 2)
			const list = []
			const dataList = this.props.data.list
			for (let i in dataList) {
				list.push(
					<li key={i}>
						<a href={dataList[i].url} title={ dataList[i].title }>
							{ dataList[i].title }
						</a>
					</li>
				);
			}

			return (
				<div className={col}>
					<h5>{this.props.data.title}</h5>
					<ul>{list}</ul>
				</div>
			)
		}
	})

	const Sitemap = React.createClass({
		render() {
			if (!this.props.data || !this.props.data.length) return;
			
			const columns = []
			for (let i in this.props.data) {
				columns.push(<Column key={i} data={this.props.data[i]} col={2} />);
			}

			return <div className='row sitemap'>{columns}</div>;
		}
	})

	return () => {
		return (
			<Sitemap data={data} />
		)
	}
})