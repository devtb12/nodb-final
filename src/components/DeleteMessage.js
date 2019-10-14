import React from 'react';
import axios from 'axios';

class DeleteMessage extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	delMessage = () => {
		axios.delete(`/api/message/${this.props.val.id}`).then((response) => {
			console.log(response.data);
			this.props.updateAllHistory(response.data);
		});
	};
	render() {
		return (
			<div className="deletecontainer">
				<div>
					<ul>
						<li>
							<span>
								First: {this.props.val.first}, 
								Last: {this.props.val.last}, 
								Email: {this.props.val.email},
								Contact:{this.props.val.contact},
							</span>
						</li>
						<li>
							<span>Comment: {this.props.val.comment}</span>
						</li>
						<li>
							<span>
								<button className="delbutton" onClick={this.delMessage}>
									delete
								</button>
							</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default DeleteMessage;
