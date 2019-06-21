import React ,{Component,Fragment} from 'react';
//import { Button } from 'semantic-ui-react';

import EventDashboard from '../../features/event/EventDashbooard/EventDasboard'
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';



class App extends Component {
  
  render(){
    return (
      <Fragment>
        <NavBar/>

        <Container className="main">
        <EventDashboard/>
        </Container>
       
      </Fragment>
    );
  }
  
}

export default App;


