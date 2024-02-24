# Use document structure for ranking

Notes:
How can we exploit the document structure to improve ranking? Think of a typical Wikipedia article.
---
# Document structure

![Document Structure](../images/Document Structure.png)

Notes:
How can we exploit this information for ranking purposes?
---
# Field weights

![Document Structure](../images/Document Structure with Field Weights.png)

Notes:
How can we determine the field weights?
---
# Index with Fields

| Doc | Author          | Title                                                    |
|-----|-----------------|----------------------------------------------------------|
| #1  | Arthur McAuthor | A book providing information about information retrieval |
| #2  | Shakesbeer      | A book about the search for King Arthur                  |

***

| Term        | Doc IDs                                                |
|-------------|--------------------------------------------------------|
| arthur      | #1:Author, #2:Title<!-- .element: class="fragment" --> |
| book        | #1:Title, #2:Title<!-- .element: class="fragment" -->  |
| information | #1:Title<!-- .element: class="fragment" -->            |
| mcauthor    | #1:Author<!-- .element: class="fragment" -->           |
| shakesbeer  | #2:Author<!-- .element: class="fragment" -->           |
| ...         |

Notes:
Audience question
---
# Field weights

| Term                                                                                                                                                         | Doc IDs                                                                                                                                                                   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <span class="fragment highlight-current-fl" data-fragment-index="3"><span class="fragment highlight-current-fl" data-fragment-index="5">arthur</span></span> | <span class="fragment highlight-current-fl" data-fragment-index="3">#1:Author</span>, <span class="fragment highlight-current-fl" data-fragment-index="5">#2:Title</span> |
| <span class="fragment highlight-current-fl" data-fragment-index="3"><span class="fragment highlight-current-fl" data-fragment-index="5">book</span></span>   | <span class="fragment highlight-current-fl" data-fragment-index="3">#1:Title</span>, <span class="fragment highlight-current-fl" data-fragment-index="5">#2:Title</span>  |
| ...                                                                                                                                                          |

***

* `weight(author) = 10`
* `weight(title) = 1`

***

* <!-- .element: class="fragment" data-fragment-index="1" --> `arthur book`?
* \#1 &rarr; <!-- .element: class="fragment" data-fragment-index="2" --> <span class="fragment" data-fragment-index="3"><span class="fragment highlight-current-fl" data-fragment-index="3">author + title = 10 + 1 = **11**</span></span>
* \#2 &rarr; <!-- .element: class="fragment" data-fragment-index="4" --> <span class="fragment" data-fragment-index="5"><span class="fragment highlight-current-fl" data-fragment-index="5">title + title = 1 + 1 = **2**</span></span>

Notes:
* Audience question
---
# Field weights

* Determining weights is hard
* Use annotated corpus and machine learning

Notes:
What else can be done with field info? -> Field queries!
---
# Field queries

| Term       | Doc IDs             |
|------------|---------------------|
| arthur     | #1:Author, #2:Title |
| shakesbeer | #2:Author           |
| ...        |

***

* <!-- .element: class="fragment" --> `title:arthur`?
    * <!-- .element: class="fragment" --> #2
* <!-- .element: class="fragment" --> `author:shakesbeer`?
    * <!-- .element: class="fragment" --> #2

Notes:
* Audience question
