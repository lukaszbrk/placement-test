import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Consumer } from "../../context";

import { BrowserRouter } from "react-router-dom";

import Test from "../test/Test";
import Texts from "../texts/Texts";

export default class MainMenu extends Component {

//move logic to context
  //state = { activeItem: "" };

  //handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    //const { activeItem } = this.state;

    return (

        <BrowserRouter>
          <Router>
            <React.Fragment>
            <Consumer>
            {value=>(
              <Menu tabular>
           
                <Menu.Item
                  name="Tekst"
                  active={value.activeItem === "Tekst"}
                  onClick={value.handleItemClick}
                  as={NavLink}
                  exact
                  to="/"
                />
            
                <Menu.Item
                  name="Test"
                  disabled={value.disabledMenuItem_Test}
                  active={value.activeItem === "Test"}
                  onClick={value.handleItemClick}
                  as={NavLink}
                  to={value.disabledMenuItem_Test ? '#'  : '/test'}
          
                />
      
       
              </Menu>)}</Consumer>
              <Route exact path="/" component={Texts} />
              <Route path="/test" component={Test} />
            </React.Fragment>
          </Router>
        </BrowserRouter>
     
    );
  }
}
