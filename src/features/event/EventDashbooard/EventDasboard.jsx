import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';

 class EventDasboard extends Component {
    render() {
        return(
            <Grid>
                <Grid.Column width={10}>
                    <EventList/> 
                     </Grid.Column>

                     <Grid.Column width={6}>
                    <h2>Right colun </h2>
                     </Grid.Column>
            </Grid>
        )
    }
}
export default EventDasboard;
