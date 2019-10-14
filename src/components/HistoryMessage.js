import React from 'react';
import axios from 'axios';
import DeleteMessage from './DeleteMessage';
import Footer from '../Footer';

import NavBar from '../NavBar';
import MainContent from '../MainContent';
import MidContent from '../MidContent';
import WaitingListText from '../WaitingListText';

class HistoryMessage extends React.Component {
	constructor() {
		super();
		this.state = {
			allHistory: []
		};
	}
	updateAllHistory = (newArr) => {
		this.setState({ allHistory: newArr });
	};
	componentDidMount() {
		axios
			.get('/api/message')
			.then((response) => {
				console.log(response.data);
				this.setState({ allHistory: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		let hisTrack = this.state.allHistory.map((val) => {
			return (
				<div key={val.id}>
					<DeleteMessage val={val} updateAllHistory={this.updateAllHistory} />
				</div>
			);
		});
		return (
			<div className="grandparent">
				<header>
					<NavBar />
				</header>

				<div className="toplogo" />

				<div>
					<div>
						<main>
							<MainContent />
						</main>

						<section>
							<MidContent />
						</section>

						<container>
							<WaitingListText />
						</container>

						<div className="waitinglogo">MARS STANDBY LIST ↓</div>

						<footer>{hisTrack}</footer>
						<div>
							<Footer />
						</div>
					</div>
					<div />
				</div>
			</div>
		);
	}
}

export default HistoryMessage;
