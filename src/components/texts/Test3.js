import React from "react";

import { Link } from "react-router-dom";
import { Consumer } from "../../context";

import { Label, Popup, Button, Icon } from "semantic-ui-react";

const Test3 = () => (
  <Consumer>
    {value => (
      <React.Fragment>
        <p>
          <b>Comic Enterprises Limited vs Twentieth Century Fox </b>
        </p>

        <p>
          A six-year court battle between a Midlands comedy venue and a major
          Hollywood TV studio is finally over.
        </p>

        <p>
          A British Limited company started <b>legal action</b> against the huge
          American corporation Twentieth Century Fox in London in 2013. The
          claimant in this case was Comic Enterprises Limited  <Popup
            trigger={
              <Label
                as={Link}
                to="/test"
                id={1}
                size="mini"
                onClick={value.gotoQuestion}
              >
                Q1
              </Label>
            }
            content="Przejdź do Pytania 1"
          />. The claimant's
          business operates four comedy clubs around the United Kingdom and its
          headquarters are in the English city of Birmingham. The defendant's
          business has its headquarters in Los Angeles.
        </p>

        <p>
          The problems between the two parties began when the defendant company
          launched a new TV show in 2009. The show was a huge success in its
          first 12 months. The programme was in its third season on TV in 2013
          when the claimant started this legal action  <Popup
            trigger={
              <Label
                as={Link}
                to="/test"
                id={2}
                size="mini"
                onClick={value.gotoQuestion}
              >
                Q2
              </Label>
            }
            content="Przejdź do Pytania 2"
          />. The name of the TV
          programme  is 'Glee'. The show tells the story of a group of American
          teenagers who attend High School and sing in a club after school.
          Unfortunately, Comic Enterprises Limited, which operates under the
          name 'The Glee Club', registered the name and
          <b> trademark</b> 'Glee’ in June 1999, ten years before the launch of
          the TV show. The owner of Comic Enterprises Limited, Mark Tughan, says
          that the American show breached his trademark  <Popup
            trigger={
              <Label
                as={Link}
                to="/test"
                id={3}
                size="mini"
                onClick={value.gotoQuestion}
              >
                Q3
              </Label>
            }
            content="Przejdź do Pytania 3"
          />. Comic Enterprises Limited made the claim in the Patents Court.
          However, in March 2013, the Patents Court transferred the case to the
          High Court at the request of the defendant. This means that the
          claimant's costs became significantly higher  <Popup
            trigger={
              <Label
                as={Link}
                to="/test"
                id={4}
                size="mini"
                onClick={value.gotoQuestion}
              >
                Q4
              </Label>
            }
            content="Przejdź do Pytania 4"
          />.
        </p>

        <p>
          Simon Malynicz, the spokesman for Fox, argued that the two trademarks
          were 'plainly different' and denied that the public would confuse the
          two  <Popup
            trigger={
              <Label
                as={Link}
                to="/test"
                id={5}
                size="mini"
                onClick={value.gotoQuestion}
              >
                Q5
              </Label>
            }
            content="Przejdź do Pytania 5"
          />. He added that Comic Enterprises' trademark was clearly connected
          with comedy and there was no <b>infringement</b> in using a similar
          trademark for a show involving drama and singing. In January 2014 Fox
          instructed London­ based solicitors Simmons &amp; Simmons to fight the
          claim.  Mr Tughan successfully argued in the High Court in 2014 that
          the show breached his trademark. Twentieth Century Fox had appealed
          against the  ruling that it breached a trademark registered, but three
          appeal court judges dismissed its latest argument that EU trademark
          law affected the earlier <b>ruling</b>. And just days before the case
          was due before the Supreme Court, the two sides came to an
          <b> out-of-court agreement</b>.
        </p>

        <p>&nbsp;</p>

        <p>1. Wyjaśnij zaznaczone wyrażenia (5 pkt)</p>



        <p>
          2. Odpowiedz na pytania (5 pkt){" "}
          <Popup
            trigger={
              <Label
                as={Link}
                to="/test"
                id={1}
                size="mini"
                onClick={value.gotoQuestion}
              >
                Przejdź do testu
              </Label>
            }
            content="Przejdź do Pytań"
          />
        </p>
        <p>&nbsp;</p>
        <Button
          color="red"
          size='small'
          onClick={
            value.handleCloseResults
            //this.forceUpdate();
          }
          inverted
          value="NewTest"
          as={Link}
          to="/"
        >
          <Icon name="checkmark" /> Wybierz nowy test
        </Button>
        <p>&nbsp;</p>
      </React.Fragment>
    )}
  </Consumer>
);
export default Test3;
