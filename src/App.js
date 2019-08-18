import React from 'react';
import {BrowserRouter as Router,
		Switch,
		Route,
		Link	
	} from 'react-router-dom'

import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import LandingPage from './pages/LandingPage'


class App extends React.Component {
  render() {
    return (
		<div>
		<Router>
			
			<Navbar bg="dark" variant="dark" style={{overflow: 'hidden', position: 'fixed', top: 0, width: '100%', zIndex: 99}}>
				<Navbar.Brand>
					<Link to="/" style={{color: '#FFF', textDecoration: 'none'}}>
					<i class="fa fa-code" aria-hidden="true"></i>
					<span style={{padding: 10}}>Jr. Dev Life</span>
					</Link>
				</Navbar.Brand>
				<Navbar.Brand>
					<Link to="/blog" style={{color: '#FFF', textDecoration: 'none'}}>Blog</Link>
				</Navbar.Brand>
				<Navbar.Brand>
					<Link to="/join" style={{color: '#FFF', textDecoration: 'none'}}>Join</Link>
				</Navbar.Brand>
			</Navbar>
			<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/blog" component={BlogPage} />
					<Route path="/join" component={LandingPage} />
				</Switch>
			</Router>
		</div>
          )
  }
}
export default App;
