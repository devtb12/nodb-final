import React, { useState } from 'react';
import NavBar from './NavBar';
// import MainContent from './MainContent';
// import MidContent from './MidContent';
import HistoryMessage from './components/HistoryMessage';

//CSS
import './styles/Global.css';
import './styles/Landing.css';
import './styles/Inputfield.css';
import './styles/Nav.css';
import './styles/DeleteMessage.css';

const App = () => {
	const [ viewPage, setViewPage ] = useState('Landing');

	return (
		<div>
			<NavBar setViewPage={setViewPage} />

			{viewPage === 'Landing' ? <HistoryMessage /> : '404 - Page Not Found'}
		</div>
	);
};

export default App;
