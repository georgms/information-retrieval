# Precision & Recall

Notes:
---
# Precision

* Are all results relevant?

Notes:
---
# Recall

* Are all relevant documents in the results?

Notes:
---
![precision-recall](../images/precision-recall.png)

Notes:
* Am Whiteboard machen?
* How to evaluate?
---
# Evaluation

* Requires human effort
* Annotated corpus:

----

| Information Need     | iPhone X | Galaxy S10 | Cover for Galaxy S10 | Battery Pack |
|----------------------|----------|------------|----------------------|--------------|
| smartphone           | ✓        | ✓          | -                    | -            |
| apple smartphone     | ✓        | -          | -                    | -            |
| smartphone accessory | -        | -          | ✓                    | ✓            |

----

* Augment with click-stream logs

Notes:
---
![precision-recall-example](../images/Precision Recall Example.svg)<!-- .element: height="500px" -->

Precision for _smartphone_? <span>50%</span><!-- .element: class="fragment" -->

Recall for _smartphone_? <span>50%</span><!-- .element: class="fragment" -->

Notes:
* Audience question
---
# Precision & Recall

* <!-- .element: class="fragment" --> Will never be 100% both, so:
* <!-- .element: class="fragment" --> Rank results according to relevance

Notes:
* How to achieve 100% recall?
* What could be criterias for ranking results?