import React, { Component } from 'react'
import EventListItem from './EventListItem.jsx'

class EventList extends Component {
	render() {
		const {events, onEventOpen} = this.props;
		return (
			<div>
				<h1> Event List </h1>
				{events.map((event) => (
					<EventListItem key={event} event={event} onEventOpen={onEventOpen} />
				))}
			</div>
		)
	}
}

export default EventList
