import React from "react";

import Question from "./Question/Question";
import Navigation from "./Navigation";
import { Button, Grid, Modal, Icon, Header } from "semantic-ui-react";
import { Consumer } from "../../context";
import { Form, Radio } from "semantic-ui-react";

const StartTest = () => (
  <div>
    <h1>Start Test</h1>
    <SelectLevel />
    <br />
    <StartButton />
  </div>
);

const StartButton = () => (
  <Consumer>
    {value => (
      <div>
        <Button
          disabled={!value.buttonPressable}
          primary
          onClick={value.handleSelectLevel}
        >
          Rozpocznij
        </Button>
      </div>
    )}
  </Consumer>
);

const SelectLevel = () => (
  <Consumer>
    {value => (
      <div>
        <Form>
          <Form.Field>
            <Radio
              label="Poziom podstawowy"
              name="radioGroup"
              level="basic"
              checked={value.level === "basic"}
              onChange={value.handleChooseLevel}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Poziom rozszerzony"
              name="radioGroup"
              level="advanced"
              checked={value.level === "advanced"}
              onChange={value.handleChooseLevel}
            />
          </Form.Field>
        </Form>
      </div>
    )}
  </Consumer>
);

const Test = () => (
  <div>
    <Consumer>
      {value => {
        switch (value.mode) {
          case "selectingLevel":
            return <StartTest />;

          case "Testing":
            return (
              <React.Fragment>
                <Question
                  question={value.questionsReady[value.activePage - 1]}
                  markAnswer={value.markAnswer}
                  modal={value.modal}
                />
                <Grid divided="vertically">
                  <Grid.Row columns="equal">
                    <Grid.Column>
                      <Navigation />
                    </Grid.Column>
                    <Grid.Column>
                      <Button>Brakujące</Button>

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

                    <Grid.Column>
                      {/*
                <Button onClick={value.showScreen} id="clear">
                  Wyczyść
                </Button>
               */}
                      <Modal
                        trigger={
                          <Button onClick={value.handleOpen}>
                            Usuń odpowiedzi
                          </Button>
                        }
                        open={value.modalOpen}
                        onClose={value.handleClose}
                        basic
                        size="small"
                      >
                        <Header icon="browser" content="Usuwanie odpowiedzi" />
                        <Modal.Content>
                          <h3>Czy chcesz usunąć odpowiedzi?</h3>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button
                            color="red"
                            onClick={value.handleClose}
                            inverted
                            value="Usuń"
                          >
                            <Icon name="checkmark" /> Usuń odpowiedzi
                          </Button>
                          <Button
                            onClick={value.handleClose}
                            inverted
                            value="Anuluj"
                          >
                            <Icon name="checkmark" /> Nie
                          </Button>
                        </Modal.Actions>
                      </Modal>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                )
              </React.Fragment>
            );

          case "Reviewing":
            return <div><p>reviewing</p>
            
            <Question
            question={value.questionsReady[value.activePage - 1]}
            markAnswer={value.markAnswer}
            mode={value.mode}
          />
          <Grid.Column>
                      <Navigation />
                    </Grid.Column>
          </div>

            

          // do something

          default:
        }
      }}
    </Consumer>
  </div>
);

export default Test;
