import React from "react";
import { Divider, Header, Segment } from "semantic-ui-react";
import { Consumer } from "../../../context";
import { Form, Checkbox } from "semantic-ui-react";

const Question = () => (
  <Segment>
    <Header as="h3">Pytanie</Header>

    <Consumer>
      {value => <h1>{value.questionsSelected[value.activePage - 1].Text}</h1>}
    </Consumer>
    <Divider section />

    <Header as="h3">Odpowiedzi</Header>
    <Segment>
      <Header as="h3"> </Header>

      <Consumer>
        {value =>
          value.questionsSelected[value.activePage - 1].Answers["incorrect"]
            .concat(value.questionsSelected[value.activePage - 1].Answers["correct"])
            .map(item => (
              <span>
             
                <Form>
           
                  <Form.Field>
                    <Checkbox
                      
                      radio
                      label={item}
                      name="checkboxRadioGroup"
                   
                      //checked={this.state.value === "that"}
                      //onChange={this.handleChange}
                    />
                  </Form.Field>
                </Form>
                <br />
              </span>
            ))
        }
      </Consumer>
    </Segment>
  </Segment>
);

export default Question;
