import React, { Component } from "react";
import axios from "axios";
import { shuffle } from "./tools.js";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    activePage: 1,

    //questions
    questions: [],
    questionsSelected: [],
    questionsReady: [],

    level: "",
    levelSelected: false,
    //buttons
    buttonPressed: false,
    buttonPressable: false,

    //methods

    //pagination
    handlePaginationChange: (e, { activePage }) =>
      this.setState({ activePage }),

    //select level
    handleSelectLevel: e => this.setState({ buttonPressed: true }),

    handleChooseLevel: (e, { level }) =>
      this.setState({ level, buttonPressable: true }, () => {
        this.setState(
          {
            questionsSelected: [...this.state.questions].filter(
              this.filterbyLevel //filter by level
            )
          },
          () => {
            this.setState(
              {
                questionsReady: this.prepareQuestion( //
                  this.state.questionsSelected
                )
              } /*()=> console.log(this.state.questionsReady[0]['All_with_keys']['r0'])*/
            );
          }
        );
      }),

    handleChecked: (e, { value }) => {
      const ticked = [...this.state.questionsReady];
      ticked[this.state.activePage - 1]["Ticked"] = e.target.value;
      this.setState(ticked);
      console.log(
        this.state.questionsReady[this.state.activePage - 1]["Ticked"]
      );
    }
  };

  filterbyLevel = question => {
    return question["Level"] === this.state.level;
  };

  prepareQuestion = questions => {

    var rtr = questions.map(question => {
      var { correct, incorrect } = question["Answers"];

      var wrong = [];

      //assign keys to question
      incorrect.map((value, index) => {
        wrong["w" + index] = value;
      });
      //add new properties to questions
      question["Wrongs"] = wrong;
      question["Rights"] = { r0: correct };
      question["Ticked"] = "";

      var all = Object.assign({}, wrong, { r0: correct });

      question["All_with_keys"] = all;

 

      var to_shuffle = Object.assign({}, wrong, { r0: correct });


      //random shuffle of question keys with Fisher-Yates-Durstenfeld shuffle
      var shuffled_keys = shuffle(Object.keys(to_shuffle));

      question["Shuffled_keys"] = shuffled_keys;


      return question;
    });

    return rtr;
  };

  componentWillMount() {
    axios
      .get("https://my-json-server.typicode.com/lukaszbrk/demo/db")
      .then(res => {
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
