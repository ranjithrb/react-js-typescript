import React, { ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home';

function AppRouter(): ReactElement {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			{/* Load "Home" for all paths other than '/' also. Remove and add routes as needed */}
			<Route>
				<Redirect to="/" />
			</Route>
		</Switch>
	);
}

export default AppRouter;
