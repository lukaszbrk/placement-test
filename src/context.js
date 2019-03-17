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

    results: "",

    level: "",
    levelSelected: false,
    //buttons
    buttonPressed: false,
    buttonPressable: false,
    mode:'selectingLevel',

    //modal handling
    modalOpen: false,

    modalOpenResults: false,

    handleClose: e => {
      this.setState({ modalOpen: false });

      if (e.target.value === "Usuń") {
        console.log("Usuwam");
        this.resetForm();
      } else {
        console.log("Nie usuwaj wyników");
      }
    },

    handleCloseResults: e => {
      this.setState({ modalOpenResults: false });

      if (e.target.value === "NewTest") {
        console.log("Nowy Test");
        this.resetForm();
      } else if (e.target.value === "Review"){
        
        this.setState({ mode: 'Reviewing' });
      }
      else {}
    },

    handleOpen: () => this.setState({ modalOpen: true }),

    handleOpenResults: () => {
      this.state.showResults();

      this.setState({ modalOpenResults: true });
    },

    //clear and results methods

    //pagination
    handlePaginationChange: (e, { activePage }) =>
      this.setState({ activePage }),

    //select level
    handleSelectLevel: e => this.setState({ mode: 'Testing' }),

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
                questionsReady: this.prepareQuestion(
                  //
                  this.state.questionsSelected
                )
              } /*()=> console.log(this.state.questionsReady[0]['All_with_keys']['r0'])*/
            );
          }
        );
      }),

    markAnswer: e => {
      //console.log(e.target.value)
      const ticked = [...this.state.questionsReady];
      ticked[this.state.activePage - 1]["Ticked"] = e.target.value;
      //delay after answering
      this.setState({ questionsReady: ticked }, () => { if (this.state.activePage>=this.state.questionsReady.length) {} else {
        setTimeout(() => {
          this.setState({ activePage: this.state.activePage + 1 });
        }, 1200);
      }});
    },

    showResults: () => {
      var length = this.state.questionsReady.length;
      var rightAnswers = 0;

      for (var i = 0; i < length; i++) {
        //console.log(Object.keys(this.state.questionsReady[i]));

        if (this.state.questionsReady[i]["Ticked"] === "r0") {
          rightAnswers = rightAnswers + 1;
        }
      }

      //console.log(rightAnswers);
      this.setState({ results: rightAnswers }, () =>
        console.log(this.state.results)
      );
    },

    removeAnswers: e => {
      console.log("Removing asnwers");
    }
  };

  baseState = this.state;

  resetForm = () => {
    var temp = sessionStorage.getItem("Questions");
    var q = JSON.parse(temp);
    console.log(this.baseState);
    //console.log(viewName);

    this.setState(this.baseState);

    this.setState({ questions: q });
  };
  resetAnswers = () => {
    {
      /* 

  resetForm = (baseState)=> {
    console.log("Pytania do wczytania: "+this.questions);
    console.log("Stan bazowy: "+this.questions);
    var temp = sessionStorage.getItem('Questions');
    var q = JSON.parse(temp);

    this.setState({baseState}, ()=>this.setState({questions:q}));
  };
*/
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

  componentDidUpdate() {
    sessionStorage.setItem("Questions", JSON.stringify(this.state.questions));
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
