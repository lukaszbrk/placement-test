import React from "react";

import Question from "./Question/Question";
import Navigation from "./Navigation";
import { Button } from "semantic-ui-react";
import { Consumer } from "../../context";
import { Form, Radio } from 'semantic-ui-react'

const StartTest = () => (
  <div>
    <h1>Start Test</h1>
    <SelectLevel/>
    <br></br>
    <StartButton />
  </div>
);


const StartButton = () => (
  <Consumer>
    {value => (
      <div>
        <Button disabled={!value.buttonPressable} primary onClick={value.handleSelectLevel}>
          Rozpocznij
        </Button>
 
      </div>
    )}
  </Consumer>
);

const SelectLevel = () => (
  <Consumer>
    {value => (
      <div>
              <Form>

        <Form.Field>
          <Radio
            label='Poziom podstawowy'
            name='radioGroup'
            level='basic'
            checked={value.level === 'basic'}
            onChange={value.handleChooseLevel}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Poziom rozszerzony'
            name='radioGroup'
            level='advanced'
            checked={value.level === 'advanced'}
            onChange={value.handleChooseLevel}
          />
        </Form.Field>

      </Form>
    
 
      </div>
    )}
  </Consumer>
);

const Test = () => (
  <div>
    <Consumer>
      {value => (value.buttonPressed === false ? <StartTest /> :
      <React.Fragment>
        <Question /><Navigation />
      </React.Fragment>)}
    </Consumer>
  </div>
);

export default Test;
