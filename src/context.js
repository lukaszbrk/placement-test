import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    questions: [],
    activePage: 1,
    level: "",
    buttonPressed: false,
    buttonPressable: false,
    levelSelected: false,
    questionsSelected: [], //IDs

    //methods
    handlePaginationChange: (e, { activePage }) =>
      this.setState({ activePage }),

    handleSelectLevel: e => this.setState({ buttonPressed: true }),

    handleChooseLevel: (e, { level }) =>
      this.setState({ level, buttonPressable: true }, () => {
        this.setState({
          questionsSelected: this.state.questions.filter(
            this.state.filterAcctoLevel
          )
        });
      }),

    filterAcctoLevel: question => {
      //console.log(question);
      return question["Level"] === this.state.level;
    }
  };

  /*
,
       //methods
    handlePaginationChange: (e, { activePage }) =>
      this.setState({ activePage }),

    handleSelectLevel: e =>
      this.setState(
        { buttonPressed: true },
        this.setState({
          questionsSelected: [...this.state.questions].filter(
            this.state.filterAcctoLevel
          )
        })
      ),

    handleChooseLevel: (e, { level }) =>
      this.setState({ level }, this.setState({ buttonPressable: true })),

    filterAcctoLevel: question => {
      return question["Level"] === this.state.level;
    }
  };
*/
  componentWillMount() {
    axios
      .get("https://my-json-server.typicode.com/lukaszbrk/demo/db")
      .then(res => {
        //console.log(' didmount ' + res.data.pytania[0].Answers["incorrect"]);
        this.setState({ questions: res.data.pytania });
        //this.setState({ questions: res.data.pytania });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate() {}
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
