import React from "react";

import { Label, Grid, Image, Segment, Button } from "semantic-ui-react";

const TestSelection = ({ selectingTest }) => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Segment padded>
          <Label attached="top">Test 1 - Arbitration in Business</Label>
          <Image
            as={Button}
            onClick={selectingTest}
            test_no="pytania1"
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
          />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded>
          <Label attached="bottom">Test 2 - Famous Tort Case</Label>
          <Image
            as={Button}
            onClick={selectingTest}
            test_no="pytania2"
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
          />
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment padded>
          <Label attached="top">Test 3 - Trademark Infringement</Label>
          <Image
            as={Button}
            onClick={selectingTest}
            test_no="pytania3"
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
          />
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default TestSelection;
