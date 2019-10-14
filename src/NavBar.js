import React from 'react';
import AddMessage from './components/AddMessage';
import HistoryMessage from './components/HistoryMessage';
import About from '../src/About';
//CSS
import './styles/Global.css';
import './styles/Nav.css';

class NavBar extends React.Component {
	constructor() {
		super();
		this.state = { visitorPage: '' };
	}
	render() {
		return (
			<div>
				<nav className="navbar">
					<div>
						<a href=".">
							<img src="https://media.giphy.com/media/cYP2sM2KpZP3i/giphy.gif" alt="loading" />
						</a>

						<div className="menu">
							<div className="label">NɅVI Ξ</div>
							<div className="spacer" />
							<div className="item">
								<span onClick={() => this.setState({ visitorPage: 'add' })}>REG.ISTER</span>
							</div>
							<div className="item">
								<span onClick={() => this.setState({ visitorPage: 'view' })}>WAIT.LST</span>
							</div>
							<div className="item">
								<span onClick={() => this.setState({ visitorPage: 'about' })}>TH.MISSION</span>
							</div>
						</div>
						{this.state.visitorPage === 'add' ? (
							<div>
								<AddMessage />
							</div>
						) : this.state.visitorPage === 'view' ? (
							<div>
								<HistoryMessage />
							</div>
						) : this.state.visitorPage === 'about' ? (
							<div>
								<About />
							</div>
						) : null}
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;
