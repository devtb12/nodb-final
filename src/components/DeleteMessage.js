import React from 'react';
import axios from 'axios';
import AddMessage from './AddMessage';

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
								<table className="result-table">
									<thead>
										<tr>
											<td>
												<button className="delbutton" onClick={this.delMessage}>
													{' '}
												</button>
											</td>
											<td>
												<span className="formtext">MARS.Reg#43839{this.props.val.id}</span>
											</td>
											<td>
												<span className="formtext">First:</span> {this.props.val.first},
											</td>
											<td>
												<span className="formtext">Last:</span> {this.props.val.last},
											</td>
											<td>
												<span className="formtext">Email:</span> {this.props.val.email},
											</td>
											<td>
												<span className="formtext">Contact:</span> {this.props.val.contact},
											</td>

											<td>
												<span className="formtext">Comment:</span> {this.props.val.comment}
											</td>
										</tr>
									</thead>
								</table>

								{/* First: {this.props.val.first}, 
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
								</button> */}
							</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default DeleteMessage;
