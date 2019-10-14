import React from 'react';
import AddMessage from './components/AddMessage';

const WaitingListText = () => {
	return (
		<div className="waitcontainer">
			<div>
				<ul>
					<li className="elonbg" />
				</ul>
			</div>

			<div>
				<ul>
					<li>
						<div className="elonquote">
							"The first step is to establish that something is possible; then probability will occur." -
							Elon Musk
						</div>


					</li>
                    <div>
							<ul>
							
								<li>
                                    <div className="elonsignup">
									<AddMessage />
                                    </div>
								</li>
							</ul>
						</div>
				</ul>
			</div>
		</div>
	);
};

export default WaitingListText;
