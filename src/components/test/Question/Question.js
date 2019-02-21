import React from "react";
import { Divider, Header, Segment } from "semantic-ui-react";
import { Consumer } from "../../../context";
import {Checkbox } from "semantic-ui-react";

const Question = () => (
  <Segment>
    <Header as="h3">Pytanie</Header>

    <Consumer>
      {value => <h1>{value.questionsReady[value.activePage - 1].Text}</h1>}
    </Consumer>
    <Divider section />

    <Header as="h3">Odpowiedzi</Header>
    <Segment>
      <Header as="h3"> </Header>

        <Consumer>
          {value =>
            value.questionsReady[value.activePage - 1]["Shuffled_keys"].map(item => (
                <span>
            
                    <Checkbox id = {item}
                      radio
                      label={value.questionsReady[value.activePage - 1]['All_with_keys'][item]}
                      //label={item}
                      name={item}
                      //value= {value.questionsReady[value.activePage - 1]['All_with_keys'][item]}
                       value= {item}
                      //checked={value.questionsReady[value.activePage - 1]['Ticked'] === value} //1 - ticked item 2 - odpowiedz
                      checked={value.questionsReady[value.activePage - 1]['Ticked'] === item} //1 - ticked item 2 - kod odpowiedzi
                      onChange={value.handleChecked}
                    />
          

                  <br />
                  <br />
                </span>
              ))
          }
        </Consumer>

    </Segment>
  </Segment>
);

export default Question;
