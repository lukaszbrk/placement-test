import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";

import { Label} from "semantic-ui-react";

const Description = () => (

    <Consumer>
      {value => (
        <React.Fragment>
          <h1>
            <b>
              <span>Arbitration in Business</span>
            </b>
          </h1>

          <p>
            <span>&nbsp;</span>
          </p>

          <p>
            <b>
              <span>About Alternative Dispute Resolution</span>
            </b>
          </p>

          <p>
            <span>
              In small societies, based on mutual co--operation and
              interdependency, the means of solving disputes tend to be informal
              and focus on the need for mutual concessions and compromise. The
              law itself, however, is sometimes viewed as the result of increase
              in social complexity and the corresponding decrease in social
              solidarity; it has oppositional, adversarial nature. Law as a
              formal dispute resolution mechanism is seen to emerge because
              informal mechanisms no longer exist or no longer have the power to
              deal with the problems that arise in a highly individualistic and
              competitive society. However, it is recognised that the formal and
              rather intimidating atmosphere of the ordinary courts is not
              suited to resolving many kinds of disputes. Thus, various
              alternatives have been developed specifically to avoid the
              shortcomings of the formal structure of law and court procedure.
              The first and oldest of these alternative procedures to the courts
              is arbitration. This is the procedure whereby parties in dispute
              refer the issue to a third party for resolution, rather than
              taking the case to the ordinary law courts{" "}
              <Label
                as={Link}
                to="/test"
                id={1}
                size="mini"
                onClick={value.gotoQuestion}
              >
                
                Q1
              </Label>
              .
            </span>
          </p>

          <p>
            <span>&nbsp;</span>
          </p>

          <p>
            <b>
              <span>Arbitration and Business</span>
            </b>
          </p>

          <p>
            <span>
              The law’s response to the need for regulation in relation to
              business activity was in part the development of contract law, yet
              business usually does not make use of its procedures. In
              contemporary business practice, it is common, if not standard,
              practice for commercial contracts to contain express clauses
              referring any future disputes to arbitration{" "}
              <Label
                as={Link}
                to="/test"
                id={2}
                size="mini"
                onClick={value.gotoQuestion}
              >
                
                Q2
              </Label>
              .This practice is well established and its legal effectiveness has
              long been recognised by the law. Arbitration’s advantage is speed,
              cost, and informal procedures that respect mutuality and
              interdependency of the parties in business relationships. The
              problem with the law is that the court case tends to break such
              relationships.
            </span>
          </p>

          <p>
            <span>&nbsp;</span>
          </p>

          <p>
            <b>
              <span>Arbitrators and Procedure</span>
            </b>
          </p>

          <p>
            <span>
              The parties themselves choose their arbitrator, ensuring that the
              person has the necessary expertise in their area and is not
              connected to either of them. Once appointed, the arbitrator is
              required to act in an impartial, judicial manner just as a judge
              would, but the difference is that they will not usually need to
              have technical points explained to them, so there is less need for
              expert witnesses. Arbitrator’s powers include limiting the costs
              to be recoverable by either party and making orders which are
              equivalent to High Court injunctions if the parties agree.
              Arbitrators are also authorised to play an inquisitorial role,
              investigating the facts of the case – many of them are, after all,
              experts in the relevant fields. The parties may shape the process
              according to their needs; still, arbitration hearings must be
              conducted in a judicial manner, in accordance with the rules of
              natural justice, but proceedings are held in private, with the
              time and place decided by the parties
              <Label
                as={Link}
                to="/test"
                id={3}
                size="mini"
                onClick={value.gotoQuestion}
              >
                
                Q3
              </Label>
              . The arbitrator’s decision, known as the award, is often
              delivered immediately, and is as binding on the parties as a High
              Court judgment would be, and if necessary can be enforced as one.
              The award is usually to be considered as final, but appeal may be
              made to the High Court on a question of law, with the consent of
              all the parties, or with the permission of the court. The High
              Court may confirm, vary or reverse the award, or send it back to
              the arbitrator for reconsideration
              <Label
                as={Link}
                to="/test"
                id={4}
                size="mini"
                onClick={value.gotoQuestion}
              >
                
                Q4
              </Label>
              <Label
                as={Link}
                to="/test"
                id={5}
                size="mini"
                onClick={value.gotoQuestion}
              >
                
                Q5
              </Label>
              .
            </span>
          </p>

          <p>
            <span>&nbsp;</span>
          </p>

          <p>
            <b>
              <span>Advantages of Arbitration</span>
            </b>
          </p>

          <p>
            <span>
              Generally, arbitration saves time and money. Many dispute
              resolutions may not require legal representation, and even those
              that do involve lawyers may be quicker and therefore cheaper than
              going to court: alternative methods tend to be more informal than
              court procedures, without complicated rules e.g. evidence or
              transparency. Arbitration fees can be high, but for companies this
              may be outweighed by the money they save through being able to get
              the problem solved as soon as it arises, rather than having to
              wait months for a court hearing.{" "}
              <Label
                as={Link}
                to="/test"
                id={6}
                size="mini"
                onClick={value.gotoQuestion}
              >
                
                Q6
              </Label>
              The dispute may also be resolved quicker by the fact that those
              who run alternative dispute resolution schemes often have
              specialist knowledge. Other important advantages is privacy;
              arbitration proceedings are usually private, thus business secrets
              are not made known to competitors. Finally, the arbitration avoid
              irrevocably dividing the parties, so allows business relationships
              to be maintained
              <Label
                as={Link}
                to="/test"
                id={7}
                size="mini"
                onClick={value.gotoQuestion}
              >
                
                Q7
              </Label>
              .
            </span>
          </p>

          <p>
            <span>&nbsp;</span>
          </p>

          <p>
            <b>
              <span>Disadvantages of Arbitration</span>
            </b>
          </p>

          <p>
            <span>
              The benefits of voluntarily negotiating agreement may be
              undermined where there is a serious imbalance of power between the
              parties – in effect, one party is acting less voluntarily than the
              other, e.g. mandatory arbitration clauses in consumer contracts
              and employment contracts often work in favor of the company rather
              than the employee or consumer{" "}
              <Label
                as={Link}
                to="/test"
                id={8}
                size="mini"
                onClick={value.gotoQuestion}
                
              >
                
                Q8
              </Label>
              . Relying on arbitration may also often mean removing the case
              from the state sector into the private sector where the priority
              is normally profit not justice: arbitrators may not have the
              required legal expertise to judge although a legal expert can be
              appointed provided parties are willing to increase the costs.
              However, even with legal professionals present, the arbitration
              may not use their skills and knowledge since its simplified
              procedure does not include a formal evidence process,
              interrogatories, depositions, discovery process, and doctrine of
              precedent.{" "}
              <Label
                as={Link}
                to="/test"
                id={9}
                size="mini"
                onClick={value.gotoQuestion}
              >
                
                Q9
              </Label>{" "}
           
            </span>
          </p>

          <p>
            <span>&nbsp;</span>
          </p>

          <p>
            <span><b>Bibliography</b></span>
          </p>
          <ul>
            <li>Slapper, Gary, and David Kelly. The English Legal System. Routledge, 2017.</li>
            <li>Elliot, Catherine, and Frances Quinn. English Legal System. Longman, 2010.</li>
          </ul>
        </React.Fragment>
      )}
    </Consumer>

);

export default Description;
