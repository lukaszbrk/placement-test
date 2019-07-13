import List from "list.js";
import React, { Component } from "react";
import { Menu, Segment, Grid, Input } from "semantic-ui-react";

const styleforMenu = { border: "1px solid green", padding: "1px" };

export default class Other extends Component {
  state = {
    selectedItem: ""
  };

  componentDidMount() {
    var options = {
      valueNames: ["gram_item"]
    };
    var composersList = new List("items", options);
  }

  data = () => {
    var data = [
      { gram_item: "Modal Verbs: Can" },
      { gram_item: "Modal Verbs: May" },
      { gram_item: "Modal Verbs: Must" },
      { gram_item: "Modal Verbs: Should" },
      { gram_item: "Modal Verbs: Will" },
      { gram_item: "Past Simple" },
      { gram_item: "Present Simple" },
      { gram_item: "Past Perfect" },
      { gram_item: "Past Continuous" }
    ];

    return data;
  };

  select = e => {
    console.log(e.target.id);
    this.setState({selectedItem: e.target.id})
  };

  render() {
    let rankData = this.data();
    let tableRows = rankData.map(row => (
      <span key={row.gram_item}>
        <li>
          <Menu.Item onClick={this.select} id={row.gram_item} className="gram_item">
            {row.gram_item}
          </Menu.Item>
          
        </li>
      </span>
    ));

    return (
    

      <div id="items">
        <Grid>
          <Grid.Column width={3}>
            <Input icon="search" className="search" />

            <Menu vertical style={styleforMenu} className="list">
              {tableRows}
            </Menu>
          </Grid.Column>
          <Grid.Column width={10}>
          <Segment vertical >
            <h1>{this.state.selectedItem}</h1>
            <Segment vertical>Przykład</Segment>
            <Segment vertical stacked> Opis</Segment>
            <Segment vertical stacked>Przykłady z arkuszy (z odnośnikiem do ćwiczenia) z opcją do wczytania kolejnych</Segment>
            <Segment vertical>Ćwiczenia</Segment>
            <Segment vertical tertiary>Podobne struktury</Segment>

          </Segment>
           
          
          
           
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
