import React from 'react';
import axios from 'axios';

class AddMessage extends React.Component {
	constructor() {
		super();
		this.state = {
			first: '',
			last: '',
			email: '',
			contact: '',
			comment: ''
		};
	}

	handleFirstChange = (e) => {
		this.setState({ first: e.target.value });
	};

	handleLastChange = (e) => {
		this.setState({ last: e.target.value });
	};
	handleEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};
	handleContactChange = (e) => {
		this.setState({ contact: e.target.value });
	};
	handleCommentChange = (e) => {
		this.setState({ comment: e.target.value });
	};
	handleClick = (e) => {
		const { first, last, email, contact, comment } = this.state;
		e.preventDefault();
		axios
			.post('/api/message', {
				first,
				last,
				email,
				contact,
				comment
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});

		//RETURN - RENDER
	};
	render() {
		return (
			<div>
				<ul>
					<li>
						<input placeholder="First Name" onChange={this.handleFirstChange} />
					</li>
					<li>
						<input placeholder="Last Name" onChange={this.handleLastChange} />
					</li>
					<li>
						<input placeholder="Email" onChange={this.handleEmailChange} />
					</li>
					<li>
						<input placeholder="Contact #" onChange={this.handleContactChange} />
					</li>
					<li>
						<input placeholder="Comments" onChange={this.handleCommentChange} />
					</li>
					<li>
						<button className="regbutton" onClick={this.handleClick}>
							Register to go to Mars
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default AddMessage;
