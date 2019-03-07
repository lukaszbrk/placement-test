import React from "react";
import { Divider, Header, Segment } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";

const Question = ({ question, markAnswer }) => (
  <Segment>
    <Header as="h3">Pytanie</Header>

    <h1>{question.Text}</h1>

    <Divider section />

    <Header as="h3">Odpowiedzi</Header>
    <Segment>
      <Header as="h3"> </Header>

      {question["Shuffled_keys"].map(item => (
        <span>
          <Checkbox
            id={item}
            radio
            label={question["All_with_keys"][item]}
            name={item}
            value={item}
            checked={question["Ticked"] === item}
            onChange={markAnswer}
          />

          <br />
          <br />
        </span>
      ))}
    </Segment>
  </Segment>
);

export default Question;
