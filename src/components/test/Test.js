import React from "react";

import Question from "./Question/Question";
import Navigation from "./Navigation";
import {
  Button,
  Grid,
  Modal,
  Icon,
  Header,
  Container,

} from "semantic-ui-react";
import { Consumer } from "../../context";

const Test = () => (
  <div>
    <Consumer>
      {value => {
        switch (value.mode) {
          case "selectingLevel":
            return;

          case "Testing":
            return (  
              <React.Fragment>
            
                <Question
                  question={value.questionsReady[value.activePage - 1]}
                  markAnswer={value.markAnswer}
                  modal={value.modal}
                />
              
                  <Grid divided="vertically">
                    <Grid.Row columns="equal" align="right">
                      <Grid.Column>
                        <Navigation />
                      </Grid.Column>
                      <Grid.Column>
                        <Button onClick={value.showMissing}>Brakujące</Button>

                        <Modal
                          trigger={
                            <Button onClick={value.handleOpenResults}>
                              Pokaż wyniki
                            </Button>
                          }
                          open={value.modalOpenResults}
                          onClose={value.handleCloseResults}
                          basic
                          size="small"
                        >
                          <Header icon="browser" content="Wyniki" />
                          <Modal.Content>
                            <h3>
                              Liczba prawidłowych odpowiedzi:{" "}
                              {" " + value.results}
                            </h3>
                          </Modal.Content>
                          <Modal.Actions>
                            <Button
                              color="yellow"
                              onClick={value.handleCloseResults}
                              inverted
                              value="Review"
                            >
                              <Icon name="checkmark" /> Przegląd testu
                            </Button>

                            <Button
                              color="red"
                              onClick={value.handleCloseResults}
                              inverted
                              value="NewTest"
                            >
                              <Icon name="checkmark" /> Nowy test
                            </Button>
                            <Button
                              onClick={value.handleCloseResults}
                              inverted
                              value="Anuluj"
                            >
                              <Icon name="checkmark" /> Anuluj
                            </Button>
                          </Modal.Actions>
                        </Modal>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
             
              </React.Fragment>
            );

          case "Reviewing":
            return (
              <div>
           
                  <p align="center" style={{ color: "green" }}>
                    <b />Sprawdzanie wyników
                  </p>

                  <Question
                    question={value.questionsReady[value.activePage - 1]}
                    markAnswer={value.markAnswer}
                    mode={value.mode}
                  />

                  <Grid divided="vertically">
                    <Grid.Row columns="equal" align="right">
                      <Grid.Column>
                        <Navigation />
                      </Grid.Column>
                      <Grid.Column>
                        <Button
                          color="green"
                          onClick={value.handleCloseResults}
                          value="NewTest"
                        >
                          Nowy test
                        </Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
         
              </div>
            );

          default:
        }
      }}
    </Consumer>
  </div>
);

export default Test;
