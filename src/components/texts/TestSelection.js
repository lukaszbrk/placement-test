import React from "react";
import { Consumer } from "../../context";
import { Label, Grid, Image, Segment, Button } from "semantic-ui-react";

const TestSelection = ({selectingTest}) => (
  //this.forceUpdate()
          <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Segment padded>
                <Label attached="top">Test 1</Label>
                <Image as={Button} onClick={selectingTest}  test_no='pytania1'
                
                
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              </Segment>
            </Grid.Column>
            <Grid.Column    >
              <Segment padded>
                <Label attached="bottom">Test 2</Label>
                <Image as={Button} onClick={selectingTest}  test_no='pytania2'
               
                  src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

          
     
      
   
  );
  export default TestSelection;