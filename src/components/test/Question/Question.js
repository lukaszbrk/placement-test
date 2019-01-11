import React from "react";
import { Divider, Header, Image, Segment } from "semantic-ui-react";
import { Consumer } from "../../../context";

const Question = () => (
  <Segment>
    <Header as="h3">Pytanie</Header>
    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    <Consumer>
      {value => <h1>{value.questions[value.activePage - 1].tekst_pytania}</h1>}
    </Consumer>
    <Divider section />

    <Header as="h3">Odpowiedzi</Header>
    <Segment>
      <Header as="h3"> </Header>
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      <Consumer>
      
      {value => console.log(value.questions[value.activePage - 1].odpowiedzi)}
      </Consumer>
    </Segment>
  </Segment>
);

export default Question;
