# Term-document Matrix

Aka _incidence matrix_

Reduce time complexity of `grep` operation

<dl>
  <dt>Rows</dt>
  <dd>Distinct query terms</dd>

  <dt>Columns</dt>
  <dd>Documents</dd>

  <dt>Fields</dt>
  <dd>1 if <em>term</em> in <em>doc</em> else 0</dd>
</dl>

Documents need to be pre-processed
---

<!-- .slide: class="audience-question" -->

* \#1: _a book about information retrieval_
* \#2: _a book about the search for information_
* \#3: _a book about information_

&darr;

|                 | #1                                                           | #2                                                           | #3                                                            |
|-----------------|--------------------------------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------|
| **Book**        | 1<!-- .element: class="fragment" data-fragment-index="1" --> | 1<!-- .element: class="fragment" data-fragment-index="5" --> | 1<!-- .element: class="fragment" data-fragment-index="9" -->  |
| **Information** | 1<!-- .element: class="fragment" data-fragment-index="2" --> | 1<!-- .element: class="fragment" data-fragment-index="6" --> | 1<!-- .element: class="fragment" data-fragment-index="10" --> |
| **Retrieval**   | 1<!-- .element: class="fragment" data-fragment-index="3" --> | 0<!-- .element: class="fragment" data-fragment-index="7" --> | 0<!-- .element: class="fragment" data-fragment-index="11" --> |
| **Search**      | 0<!-- .element: class="fragment" data-fragment-index="4" --> | 1<!-- .element: class="fragment" data-fragment-index="8" --> | 0<!-- .element: class="fragment" data-fragment-index="12" --> |

Notes:
Audience question
---

<!-- .slide: class="audience-question" -->

|             | #1 | #2 | #3 |
|-------------|----|----|----|
| Book        | 1  | 1  | 1  |
| Information | 1  | 1  | 1  |
| Retrieval   | 1  | 0  | 0  |
| Search      | 0  | 1  | 0  |

&darr;

<dl>
  <dt>Document vector</dt>
  <dd>#1: <code>(1, 1, 1, 0)</code><!-- .element: class="fragment" --></dd>
  
  <dt>Term vector</dt>
  <dd>Retrieval: <code>(1, 0, 0)</code><!-- .element: class="fragment" --></dd>
</dl>

Notes:
Audience question
---

<!-- .slide: class="audience-question" -->

# How to query

Replace every term in query with term vector

* $\text{(information AND retrieval) OR search}$ <!-- .element: class="fragment" -->
* $= (111 \cap 100) \cup 010$ <!-- .element: class="fragment" -->
* $= 100 \cup 010$ <!-- .element: class="fragment" -->
* $= 110$ <!-- .element: class="fragment" -->
* = \#1 and \#2 <!-- .element: class="fragment" -->
    * &shy;<!-- .element: class="fragment" --> \#1: _a book about information retrieval_
    * &shy;<!-- .element: class="fragment" --> \#2: _a book about the search for information_

<!-- .element: style="list-style-type: none;" -->

Notes:
Audience question
---

<!-- .slide: class="audience-question" -->

# Time complexity

 $$O(\text{num query terms} \times \text{num distinct terms})$$<!-- .element: class="fragment" data-fragment-index="1" -->

## <!-- .element: class="fragment" data-fragment-index="2" -->Example

* &shy;<!-- .element: class="fragment" data-fragment-index="2" -->*English Wikipedia*: 6M articles, 12B characters, 1.2M
  distinct terms
* &shy;<!-- .element: class="fragment" data-fragment-index="2" -->grep: 2 query terms &times; 12GB = **24 billion string
  comparisons**
* &shy;<!-- .element: class="fragment" data-fragment-index="3" -->Term-Document Matrix: 2 query terms &times; 1.2M
  distinct terms = **2.4M lookups**

Notes:
Audience question
---

<!-- .slide: class="audience-question" -->

# Size

$$\text{num(distinct terms)} \times \text{num(docs)} \times \text{size of bit}$$<!-- .element: class="fragment" data-fragment-index="1" -->

## <!-- .element: class="fragment" data-fragment-index="2" -->Example

* &shy;<!-- .element: class="fragment" data-fragment-index="2" -->*English Wikipedia*: 6M articles, 12B characters, 1.2M
  distinct terms
* &shy;<!-- .element: class="fragment" data-fragment-index="3" -->1.2M distinct terms &times; 6M articles =
  7.200.000.000.000 cells = 7.2 terrabit = **900 gigabyte**

That's way too large! How can the size be decreased?<!-- .element: class="fragment" data-fragment-index="4" -->

&darr;<!-- .element: class="fragment" data-fragment-index="5" -->

&shy;<!-- .element: class="fragment" data-fragment-index="5" -->Matrix is very sparse, has mostly zeros

Notes:
Audience question
---
&shy;<!-- .element: class="stretch" --> ![...](images/buch-index.png)

Notes:
