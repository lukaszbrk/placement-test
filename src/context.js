import React, { Component } from "react";
import axios from "axios";
import { shuffle } from "./tools.js";
const Context = React.createContext();

export class Provider extends Component {

  constructor(props) {
    super(props);

  this.state = {

    //for pagination
    activePage: 1,

    //questions
    questions: [], //retrieved
    questionsSelected: [], //selected
    questionsReady: [], //after adding new properies

    results: "",

    level: "", // testlevel
    levelSelected: false,

    //buttons
   
    buttonPressable: false, //after selecting the testlevel
    mode:'selectingLevel', //default mode; other: 'Testing' and 'Reviewing'

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
    handleCloseResults: e => {
      this.setState({ modalOpenResults: false });

      if (e.target.value === "NewTest") {
        console.log("Nowy Test");
        this.resetForm();
      } else if (e.target.value === "Review"){
        
        this.setState({ mode: 'Reviewing' });
        this.setState({ activePage: 1 });
      }
      else {}
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

    //selecting level
    handleSelectLevel: e => this.setState({ mode: 'Testing' }),
    

    //adding new properties to selected question
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

    //mark the answer and move to another question after the delay
    markAnswer: e => {
      //console.log(e.target.value)
      const ticked = [...this.state.questionsReady];
      ticked[this.state.activePage - 1]["Ticked"] = e.target.value;
      //delay after answering
      this.setState({ questionsReady: ticked }, () => { if (this.state.activePage>=this.state.questionsReady.length) {} else {
        setTimeout(() => {
          this.setState({ activePage: this.state.activePage + 1 });
        }, 1000);
      }});
    },

    // go to the first unanswered question
    showMissing: () => {

      console.log("Missing")

       var length = this.state.questionsReady.length;
    

      for (var i = 0; i < length; i++) {
     

        if (this.state.questionsReady[i]["Ticked"] === "") {
 
          this.setState({ activePage: i+1 });
          break;
        }
      }

      
    },

 
    removeAnswers: e => {
      console.log("Removing asnwers");
    }
  };

  this.baseState = this.state;
  }
////////////////////// End of State //////////////////////


  showResults  = () => {
    var length = this.state.questionsReady.length;
    var rightAnswers = 0;

    for (var i = 0; i < length; i++) {
  

      if (this.state.questionsReady[i]["Ticked"] === "r0") {
        rightAnswers = rightAnswers + 1;
      }
    }

 
    this.setState({ results: rightAnswers }, () =>
      console.log(this.state.results)
    );
  }

 

  //reset State and leave questions loaded via session storage

  resetForm = () => {
    var temp = sessionStorage.getItem("Questions");
    var q = JSON.parse(temp);
    console.log(this.baseState);


    this.setState(this.baseState);

    this.setState({ questions: q });
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
