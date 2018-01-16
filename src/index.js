import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';


function About(props) {
	return (
		<div>
			<h1>About Component</h1>
			<p>This is the About page</p>
		</div>
	);
}

function Home(props) {
	return (
		<div>
			<h1>Home Component</h1>
			<p>This is the Home page</p>
		</div>
	);
}

function Products(props) {
	const { match } = props;
	return (
		<div>
			<h1>Products Component</h1>
			<p>This is the Products page</p>
			<ul>
				<li className="navlink">
					<NavLink to={`${match.url}/music`} activeClassName="navlink--selected" exact>
						Music
					</NavLink>
				</li>
				<li className="navlink">
					<NavLink to={`${match.url}/movies`} activeClassName="navlink--selected">
						Movies
					</NavLink>
				</li>
				<li className="navlink">
					<NavLink to={`${match.url}/books`} activeClassName="navlink--selected">
						Books
					</NavLink>
				</li>
			</ul>

			<Route path={`${match.path}/music`} component={Music} />
			<Route path={`${match.path}/movies`} component={Movies} />
			<Route path={`${match.path}/books`} component={Books} />
		</div>
	);
}

function Music(props) {
	return (
		<div>
			<h1>Music Component</h1>
			<p>This is the Music page</p>
		</div>
	);
}

function Movies(props) {
	return (
		<div>
			<h1>Movies Component</h1>
			<p>This is the Movies page</p>
		</div>
	);
}

function Books(props) {
	return (
		<div>
			<h1>Books Component</h1>
			<p>This is the Books page</p>
		</div>
	);
}

function greeter() {

}

ReactDOM.render(
	<Router>
		<div>
			<ul>
				<li className="navlink">
					<NavLink to="/" activeClassName="navlink--selected" exact>
						Home
					</NavLink>
				</li>
				<li className="navlink">
					<NavLink to="/about" activeClassName="navlink--selected">
						About
					</NavLink>
				</li>
				<li className="navlink">
					<NavLink to="/solutions" activeClassName="navlink--selected">
						Solutions
					</NavLink>
				</li>
			</ul>

			<Route path="/" component={Home} exact />
			<Route path="/about" component={About} />
			<Route path="/solutions" component={Products} />
		</div>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
