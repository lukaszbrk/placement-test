import React, { Component } from "react";
import axios from "axios";
import { shuffle } from "./tools.js";
const Context = React.createContext();

export class Provider extends Component {
  constructor(props){
    super(props)
  this.state = {
    //main menu

    activeItem: "Tekst",
    handleItemClick: (e, { name }) => this.setState({ activeItem: name }),

    disabledMenuItem_Test: true,



    //for pagination
    activePage: 1,

    //Selecting Test
    selectedTestYesNo: "no",
    selectedTest: "", //test1, ...2, ...3
    //selectingTest: (e, { test_no }) => this.setState({ selectedTest: test_no }, ()=>{this.setState({ selectedTestYesNo: 'yes' },()=>{this.loadQuestions()})}),
    // prettier-ignore
    selectingTest: (e, { test_no }) => this.setState({ selectedTest: test_no },
      ()=>{this.setState({disabledMenuItem_Test: false},
      ()=>{this.setState({ selectedTestYesNo: 'yes' },
      ()=>{this.loadQuestions()})})}),

    //linking to the test from the TextPage
    gotoQuestion: e => {
      const n = parseInt(e.target.id);

      console.log("Clicked on: " + n);
      this.setState({ activePage: n }, () => {
        this.setState({activeItem: 'Test'})
      
      });
    },

    //questions
    questions: [], //retrieved
    questionsSelected: [], //selected
    questionsReady: [], //after adding new properties
    //no. of correct answers
    results: "",

    mode: "Testing", //default mode; other: 'Testing' and 'Reviewing'

    //modal handling
    modalOpen: false,

    modalOpenResults: false,

    //  remove answers only (todo)
    handleClose: e => {
      this.setState({ modalOpen: false });

      if (e.target.value === "Usuń") {
        console.log("Usuwam");
        this.resetForm();
      } else {
        console.log("Nie usuwaj wyników");
      }
    },
    // modals for the new test and reviewing
    handleCloseResults: (e, { color }) => {
      console.log(color);
      this.setState({ modalOpenResults: false });

      if (color === "red") {
        this.resetForm();
      } else if (e.target.value === "Review") {
        this.setState({ mode: "Reviewing" });
        this.setState({ activePage: 1 });
      } else {

        
      }
    },
    //modal: remove answers
    handleOpenDeleteAnswers: () => this.setState({ modalOpen: true }),

    handleOpenResults: () => {
      this.showResults();

      this.setState({ modalOpenResults: true });
    },

    //pagination
    handlePaginationChange: (e, { activePage }) =>
      this.setState({ activePage }),

    //adding new properties to selected question

    //mark the answer and move to another question after the delay
    markAnswer: e => {
      //console.log(e.target.value)
      const ticked = [...this.state.questionsReady];
      ticked[this.state.activePage - 1]["Ticked"] = e.target.value;

      //delay after answering
      const ap = this.state.activePage + 1;
      this.setState({ questionsReady: ticked }, () => {
        if (this.state.activePage >= this.state.questionsReady.length) {
        } else {
          setTimeout(() => {
            this.setState({ activePage: ap });
          }, 1000);
        }
      });
    },

    // go to the first unanswered question
    showMissing: () => {
      console.log("Missing");

      var length = this.state.questionsReady.length;

      for (var i = 0; i < length; i++) {
        if (this.state.questionsReady[i]["Ticked"] === "") {
          this.setState({ activePage: i + 1 });
          break;
        }
      }
    },

    removeAnswers: e => {
      console.log("Removing asnwers");
    }
  }
  this.baseState = this.state 
}

  ////////////////////// End of State //////////////////////
  
  
  showResults = () => {
    var length = this.state.questionsReady.length;
    var rightAnswers = 0;

    for (var i = 0; i < length; i++) {
      if (this.state.questionsReady[i]["Ticked"] === "r0") {
        rightAnswers = rightAnswers + 1;
      }
    }

    this.setState({ results: rightAnswers });
  };

  //reset State and leave questions loaded via session storage

  resetForm = () => {
       //console.log(this.baseState);


    this.setState(this.baseState);
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

  loadQuestions = () => {
    //const s = 'pytania'.concat(this.state.selectedTest)

    //edit json to point to keys
    axios
      .get("https://my-json-server.typicode.com/lukaszbrk/demo2/db")
      .then(res => {
        this.setState({ questions: res.data[this.state.selectedTest] }, () => {
          this.setState(
            {
              questionsReady: this.prepareQuestion(this.state.questions)
            } /*()=> console.log(this.state.questionsReady[0]['All_with_keys']['r0'])*/
          );
        });
      })
      .catch(err => console.log(err));
  };

  /*

  componentWillMount() {
    axios
      .get("https://my-json-server.typicode.com/lukaszbrk/demo2/db")
      .then(res => {
        this.setState({ questions: res.data.pytania2 }, () => {
          this.setState(
            {
              questionsReady: this.prepareQuestion(this.state.questions)
            } 
            );
          });
        })
        .catch(err => console.log(err));
    }
  

  componentDidUpdate() {
    sessionStorage.setItem("Questions", JSON.stringify(this.state.questions));
  }

  */
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
