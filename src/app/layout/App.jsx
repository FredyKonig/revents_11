import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard.jsx';
import Navbar from '../../features/nav/NavBar/NavBar';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboad from '../../features/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailed';
import HomePage from '../../features/home/HomePage';

class App extends Component {
  render() {
    return (
				<div>
					<Navbar />
					<Container className="main">
						<Route exact path='/' component={HomePage} />
						<Route path='/events' component={EventDashboard} />
						<Route path='/event/:id' component={EventDetailedPage} />
						<Route path='/people' component={PeopleDashboard} />
						<Route path='/profile/:id' component={UserDetailedPage} />
						<Route path='/settings' component={SettingsDashboad} />
						<Route path='/createEvent' component={EventForm} />
					</Container>
				</div>
    );
  }
}

export default App;
