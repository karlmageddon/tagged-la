import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'
import posed, { PoseGroup } from 'react-pose';

const TitleBox = posed.div({
  enter: { x: 0, opacity: 1, delay: 200, transition: { duration: 800, decay: true } },
  exit: { x: -200, opacity: 0, transition: { duration: 800, decay: true } }
});

const DescriptionBox = posed.div({
  enter: { y: 0, opacity: 1, delay: 300, transition: { duration: 800, decay: true } },
  exit: { y: 200, opacity: 0, transition: { duration: 800, decay: true } }
});


class Description extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const tags = this.props.tags
    const activeMarkerId = this.props.id

    if (activeMarkerId) {
      const activeTag = tags.find((tag) => tag.id === activeMarkerId)
      return (
          <Container className="description">
            <Grid>
              <Grid.Column floater='left' width={7} className="overlay">
                  <PoseGroup animateOnMount={true} animateOnDismount={true}>
                    <TitleBox key="titlebox">
                      <Header as='h1'>{activeTag.name}</Header>
                      <Header as='h3' className='address'>{activeTag.address}</Header>
                    </TitleBox>
                    <DescriptionBox key="descriptionbox">
                    <Container className='description'>
                      {activeTag.description}
                      <a href={activeTag.description_source} target="_blank"> (Source)</a>
                    </Container>
                    </DescriptionBox>

                  </PoseGroup>
              </Grid.Column>
            </Grid>
          </Container>
      )
    } else {
      return <div></div>
    }
  }
}

export default Description
