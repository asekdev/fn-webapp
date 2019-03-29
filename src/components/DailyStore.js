import React, { Component } from "react";
import { Container, Grid, Image, Header } from "semantic-ui-react";


class DailyStore extends Component {

  loop = () => {
    let array = [1,2,3,4,5,6]

    const map = array.map( (i) => 
        <Grid.Column key={i}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
    )
    return map;
  }

  render() {
    return (
     <Container>
       <Header as="h1" inverted color="grey">Daily Store</Header>
      <Grid doubling columns={4}>
      {this.loop()}
      </Grid>
     </Container>
    )
  }

}

export default DailyStore;