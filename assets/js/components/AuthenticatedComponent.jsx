define (['react', 'react-redux'], 
function (React, ReactRedux) {
	return (Component) => {

		class AuthenticatedComponent extends React.Component {

			componentWillMount () {
				this.checkAuth(this.props.isAuthenticated);
			}

			componentWillReceiveProps (nextProps) {
				this.checkAuth(nextProps.isAuthenticated);
			}

			checkAuth (isAuthenticated) {
				if (!isAuthenticated) {
					let redirectAfterLogin = this.props.location.pathname;
					this.props.history.push(`/auth/login?next=${redirectAfterLogin}`)
					// this.props
					// 	.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
				}
			}

			render () {
				return (
					<div>
						{this.props.isAuthenticated === true
							? <Component {...this.props}/>
							: null
						}
					</div>
				)

			}
		}

		const mapStateToProps = (state) => ({
			token: state.auth.token,
			userName: state.auth.userName,
			isAuthenticated: state.auth.isAuthenticated
		});

		return connect(mapStateToProps)(AuthenticatedComponent);

	}
})