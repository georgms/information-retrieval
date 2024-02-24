# TF pitfalls

Not always true:<!-- .element: class="fragment" -->

$tf(\text{bible}, \text{"In the beginning God created the heaven and the earth."}) = 0$<!-- .element: class="fragment" -->

Notes:
Audience question
---
# Spam

$$tf(\text{money}, \text{"money money money"}) > tf(\text{money}, \text{"Legit document about money"})$$

Spam should be prevented.<!-- .element: class="fragment" -->

Notes:
* Who can explain what the formula means and why this is an issue?
---
# Multi-term queries

$$TF(\text{cat OR dog}, \text{"cat cat cat"}) > TF(\text{cat OR dog}, \text{"cat dog"})$$

Documents which match all query terms should be ranked higher.<!-- .element: class="fragment" -->

Notes:
* Who can explain what the formula means and why this is an issue?
---
# Document length

$$tf(\text{cat}, \text{"cat"}) < tf(\text{cat}, \text{"cat dog mouse elephant cat"})$$

Term frequency should be normalized with the document length.<!-- .element: class="fragment" -->

Notes:
* Who can explain what the formula means and why this is an issue?
---
# Meanwhile, in the real world...

* Solr default is now [Okapi BM25](https://en.wikipedia.org/wiki/Okapi_BM25)
* Also based on TF-IDF
* Much less descriptive:

$${\displaystyle {\text{score}}(D,Q)=\sum_{i=1}^{n}{\text{IDF}}(q_i)\cdot {\frac {TF(q_i,D)\cdot (k_1+1)}{TF(q_i,D)+k_1\cdot \left(1-b+b\cdot {\frac {|D|}{\text{avgdl}}}\right)}}}$$ <!-- .element: class="fragment" -->

Notes:
