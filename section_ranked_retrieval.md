# Ranked retrieval

Notes:
---
# Idea I

### <!-- .element: class="fragment" --> Multiple matches for query term = more important document

> &shy;<!-- .element: class="fragment" --> A shop where **books** are bought and sold is a **book**shop or **book**
> store. **Books** can also be borrowed from libraries.

Notes:
---
# Idea II

### <!-- .element: class="fragment" --> Infrequent terms in corpus are more important

&shy; <!-- .element: class="fragment" --> Searching apple.com for `apple iphone`: `iphone` more important than `apple`

Notes:
---
# I: Term frequency

### <!-- .element: class="fragment" --> At index time:

* &shy;<!-- .element: class="fragment" --> Count term occurrences per doc
* &shy;<!-- .element: class="fragment" --> Ignore order of terms
* &shy;<!-- .element: class="fragment" --> _Bag of words_

&shy;<!-- .element: class="fragment" --> ![Tag cloud](https://upload.wikimedia.org/wikipedia/commons/5/5b/Word_Cloud_Readers_Survey.jpg)

Notes:
* Where to save TF info?
---
# TF

* \#1: _a book providing information about information retrieval_
* \#2: _a book about the search for books_
* \#3: _a book about information_

***

| Term        | Doc IDs                                              |
|-------------|------------------------------------------------------|
| Book        | #1:1, #2:2, #3:1 <!-- .element: class="fragment" --> |
| Information | #1:2, #3:1 <!-- .element: class="fragment" -->       |
| Retrieval   | #1:1         <!-- .element: class="fragment" -->     |
| Search      | #2:1         <!-- .element: class="fragment" -->     |

Notes:
* Audience participation
---
# II: Inverse document frequency

* &shy;<!-- .element: class="fragment" --> Searching apple.com for `apple OR iphone`
    * fewer documents with `iphone` than `apple`
    * `iphone` more important
* &shy;<!-- .element: class="fragment" --> Rank uncommon terms higher
* &shy;<!-- .element: class="fragment" --> Only relevant for OR search
* &shy;<!-- .element: class="fragment" --> Store value per term

Notes:
* Why is it only relevant for OR search?
* Why is it stored per term?
* What is the min and max IDF? Why?
---
<h1>Inverse Document Frequency</h1>
$$\text{idf}(\text{term}) = \frac{\text{num_docs}}{\text{document_frequency}(\text{term})}$$

<h2>Example</h2>
$$\begin{aligned}
\text{idf}(\text{apple}) & = \frac{10}{9} & = 1.1 \\\\
\text{idf}(\text{iphone}) & = \frac{10}{2} & = 5
\end{aligned}$$
---
# IDF

* \#1: _a book providing information about information retrieval_
* \#2: _a book about the search for books_
* \#3: _a book about information_

***

| Term        | IDF                                    | Doc IDs          |
|-------------|----------------------------------------|------------------|
| Book        | 1  <!-- .element: class="fragment" --> | #1:1, #2:2, #3:1 |
| Information | 1.5<!-- .element: class="fragment" --> | #1:2, #3:1       |
| Retrieval   | 3  <!-- .element: class="fragment" --> | #1:1             |
| Search      | 3  <!-- .element: class="fragment" --> | #2:1             |

Notes:

* idf(t) = 1 is a special case
* Audience participation
---
# TF-IDF Ranking

$$\text{score}(\text{query}, \text{document}) = \sum_{\text{term} \in \text{query}} \left( \text{tf}(\text{term}, \text{document}) \times \text{idf}(\text{term}) \right)$$

Notes:
* Explain formula in human-speak.
---

| Term        | IDF | Doc IDs          |
|-------------|-----|------------------|
| Book        | 1   | #1:1, #2:2, #3:1 |
| Information | 1.5 | #1:2, #3:1       |
| Retrieval   | 3   | #1:1             |
| Search      | 3   | #2:1             |

```
information retrieval search
```

### \#1 <!-- .element: class="fragment" -->

2 &times; 1.5 + 1 &times; 3 + 0 &times; 3 = 6 <!-- .element: class="fragment" -->

### \#2 <!-- .element: class="fragment" -->

0 &times; 1.5 + 0 &times; 3 + 1 &times; 3 = 3 <!-- .element: class="fragment" -->

### \#3 <!-- .element: class="fragment" -->

1 &times; 1.5 + 0 &times; 3 + 0 &times; 3 = 1.5 <!-- .element: class="fragment" -->

Notes:
