import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './App.css';
import App from './App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={StorePicker} />
				<Route path='/guitars/' component={App} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
