import React, { ReactElement } from 'react';

import logo from 'ui/assets/images/logo.svg';

import 'ui/assets/styles/home.css';

function Home(): ReactElement {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<p>Hi there! Welcome :-)</p>

				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default Home;
