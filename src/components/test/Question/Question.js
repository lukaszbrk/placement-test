import React from "react";
import { Divider, Header, Segment } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";

//styling for marking the correct answers
const styleforReview = { border: "3px solid green", padding: "5px" };

const Question = ({ question, markAnswer, mode }) => (
<div>
 
    <Header as="h2">Pytanie</Header>

    <h1>{question.Text}</h1>

    <Divider section />

    <Header as="h3">Odpowiedzi</Header>
    <Segment>
      <Header as="h3"> </Header>

      {question["Shuffled_keys"].map(item => (
        <span key={question["All_with_keys"][item]}>
          <Checkbox
            style={mode === "Reviewing" && item === "r0" ? styleforReview : {}} //mode: reviewing and r0 - correct answer
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
    </div>
);

export default Question;
