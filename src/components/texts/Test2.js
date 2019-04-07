import React from "react";


import { Link } from "react-router-dom";
import { Consumer } from "../../context";

import { Label, Popup} from "semantic-ui-react";


const Test2 = () => (
  <Consumer>
      
    {value => (

<React.Fragment>
<p ><b>The Famous Tort Case</b></p>

<p >&nbsp;</p>

<p >There is a particular case that almost
every lawyer in every common law system in the world is familiar with. This is
the famous case of Donoghue v Stevenson. The facts of the case are as follows:</p>

<p >On 26 August 1928, Mrs May Donoghue of
Glasgow left her home to make the short journey into Paisley, a neighbouring
town. Upon arriving in Paisley, Mrs Donoghue met a friend at Minchella's cafe
at 1 Wellmeadow Street. Her friend ordered and paid for a pear, an ice-cream
and a bottle of ginger beer, which is a drink that was very popular at that
time. In doing so they began the events that would change legal history
forever.</p>

<p >The ginger beer was manufactured by Mr
David Stevenson of Paisley. It came in what was described as an 'opaque'
bottle, so unfortunately no one was able to see what was in the bottle until
the contents were poured out. The cafe's proprietor, Mr Francis Minchella,
poured part of the ginger beer onto Mrs Donoghue's ice cream to make what is
known as 'an ice cream float&quot;. Mrs Donoghue apparently began to eat with enthusiasm.</p>

<p >What happened next was the basis for the
entire case. It is said that when Mrs Donoghue's friend was pouring out the
rest of the contents of the bottle into a glass ,he or she saw floating out of
the bottle what seemed to be the partly decomposed remains of a snail. Mrs
Donoghue claimed she was made ill by what she had seen. Certainly, she had
medical treatment from her doctor three days later for gastro-enteritis ,and
again three weeks later, on 16 September 1928,at the Glasgow Royal Infirmary.
She also claimed that she had suffered from ‘nervous shock'.</p>

<p >If it had been Mrs Donoghue's mysterious
friend, (he or she was never named), rather than Mrs Donoghue herself who had
suffered the effects of the ginger beer, then the legal world would probably
have heard nothing about it. The friend could have sued Mr Minchella because
there was a contract of sale between them, of which Mr Minchella was clearly <b>in
breach</b>. However, there was no contractual relationship between Mr Minchella
and Mrs Donoghue. The only person she could possibly sue was David Stevenson,
the manufacturer of the ginger beer. The question was: on what <b>grounds</b>?</p>

<p >Mrs Donoghue was advised by a remarkable
solicitor, Walter Leechman, of Leechman and Co, Glasgow. Mr Leechman decided to
proceed with Mrs Donoghue's case, even though there was no legal precedent for
such an action. The basis of the claim was simple. It was that any manufacturer
of a product intended for human consumption must be <b>liable to</b> the
consumer for any damage resulting from a lack of <b>reasonable care</b> to
ensure that the product is fit for consumption.</p>

<p >The case proceeded through various appeals
to the highest court in the land, the House of Lords. The Lords decided in
favour of Mrs Donoghue. The leading judgment was delivered on 26 May 1932 by
Lord Atkin, who said “…the rule that you are to love your neighbour becomes, in
law, you must not injure your neighbour”. He further said that product makers
must take reasonable care to avoid <b>acts or omissions</b> which they can
reasonably imagine would be likely to injure the consumer. New precedent was
established The case of Donoghue v Stevenson [1932] AC 562, commonly known as
the Paisley Snail case, lead to the creation of the general <b>tort of
negligence</b>.</p>
</React.Fragment>
 
    )}
  </Consumer>
);
export default Test2;