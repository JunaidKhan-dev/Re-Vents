import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'
import NavBar from '../../NavBar/NavBar'

export class EventListAttendee extends Component {
  render () {
    const { attendee } = this.props
    return (
      <List.Item>
        <Image as='a' size='mini' circular src={attendee.photoURL} />
        <NavBar />
      </List.Item>
    )
  }
}

export default EventListAttendee
