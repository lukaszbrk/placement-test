import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import {Provider} from '../../context';

import { BrowserRouter } from "react-router-dom";




import Test from "../test/Test";
import Description from "../Description";
import Other from "../Other";


export default class MainMenu extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Provider>
      <BrowserRouter>
        <Router>
        <React.Fragment>
          <Menu tabular>
            <Menu.Item
              name="Opis testu"
              active={activeItem === "Description"}
              onClick={this.handleItemClick}
              as={NavLink} exact to="/"
              
            />
            <Menu.Item
              name="Test"
              active={activeItem === "Test"}
              onClick={this.handleItemClick}
              as={NavLink}  to="/test"
            />
            <Menu.Item
              name="Other"
              active={activeItem === "Other"}
              onClick={this.handleItemClick}
              as={NavLink}  to="/other"
            />
          </Menu>

          

            <Route exact path="/" component={Description} />
            <Route  path="/test" component={Test} />
            
            <Route path="/other" component={Other} />
            </React.Fragment>
        </Router>
      </BrowserRouter>
      </Provider>
    );
  }
}
