import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import CityMap from './CityMap'

const App = () => {
  return(
    <Container textAlign='left'>
      <Header as='h2' className="overlay title">
        TAGGED LA
        <Header.Subheader>A Graffiti Map Of Los Angeles</Header.Subheader>
      </Header>
      <CityMap />
    </Container>
  )
}

export default App;
