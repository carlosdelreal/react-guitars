import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './App.css';
import App from './App';
import Header from "./components/Header";
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const repo = `/${window.location.pathname.split('/')[1]}`;
const Root = () => {
	return (
		<div className="primary-layout">
			<Header tagline="Acoustic &amp; Electric Guitars" />
			<BrowserRouter basename={repo}>
				<Switch>
					<Route exact path='/' component={StorePicker} />
					<Route path='/store/:storeId' component={App} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
