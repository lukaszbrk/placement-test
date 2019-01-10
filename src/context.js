import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {

    state = {

        questions : ['q1', 'q2', 'q3'],
        current_question: 1
    }
  render() {
    return (
    
        <Context.Provider value = {this.state}   >

            {this.props.children}
        
        
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;