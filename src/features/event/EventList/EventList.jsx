import React, { Component } from 'react'
import EventListItem from './EventListItem.jsx'

class EventList extends Component {
	render() {
		const {events, deleteEvent} = this.props;
		return (
			<div>
				{events.map((event) => (
					<EventListItem key={event} event={event} deleteEvent={deleteEvent} />
				))}
			</div>
		)
	}
}

export default EventList
