import React, { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';

import 'react-toastify/dist/ReactToastify.css';

import AppRouter from 'router';

const App = (): ReactElement => (
	<>
		<ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
		<ToastContainer draggable={false} />
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	</>
);
export default App;
