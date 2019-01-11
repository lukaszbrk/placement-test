import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    questions: [],
    activePage: 1,
    handlePaginationChange: (e, { activePage }) => this.setState({ activePage })
  };
  
 
  componentWillMount() {

    axios
    .get("https://my-json-server.typicode.com/lukaszbrk/demo/db")
    .then(res => {
      //console.log(' didmount ' + res.data.pytania[0].tekst_pytania );
      this.setState({questions: res.data.pytania})
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
