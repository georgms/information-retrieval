# Inverted index*

\* This will be your homework

Notes:
---

* Same information as Term-document Matrix, but
* Store only 1s = Term occurences
* Terms &rarr; List of docs

Notes:
---

* \#1: _a book about information retrieval_
* \#2: _a book about the search for information_
* \#3: _a book about information_

***

| Term        | Doc IDs                                        |
|-------------|------------------------------------------------|
| Book        | #1, #2, #3 <!-- .element: class="fragment" --> |
| Information | #1, #2, #3 <!-- .element: class="fragment" --> |
| Retrieval   | #1         <!-- .element: class="fragment" --> |
| Search      | #2         <!-- .element: class="fragment" --> |

Notes: Audience question
---

# Nomenclature

## Vocabulary / Dictionary / Lexicon <!-- .element: class="fragment" data-fragment-index="1" -->

List of terms <!-- .element: class="fragment" data-fragment-index="1" -->

## Posting <!-- .element: class="fragment" data-fragment-index="2" -->

Document which term occurs in <!-- .element: class="fragment" data-fragment-index="2" -->

## Postings list <!-- .element: class="fragment" data-fragment-index="3" -->

All documents which term occurs in <!-- .element: class="fragment" data-fragment-index="3" -->

## Postings <!-- .element: class="fragment" data-fragment-index="4" -->

All postings lists <!-- .element: class="fragment" data-fragment-index="4" -->

Notes:
---

# Index time

1. Extract terms from docs
2. Sort vocabulary alphabetically
3. Sort postings lists by document ID

Notes:
---

# Query time

1. Look up each query term in vocabulary
2. Retrieve postings
3. Intersect / Union

*Only exact terms can be found!*

Notes:
Why can only exact terms be found?
---

| Term                                                                                               | Doc IDs    |
|----------------------------------------------------------------------------------------------------|------------|
| Book                                                                                               | #1, #2, #3 |
| <span>Information</span><!-- .element: class="fragment highlight-blue" data-fragment-index="2" --> | #1, #2, #3 |
| Retrieval                                                                                          | #1         |
| <span>Search</span><!-- .element: class="fragment highlight-blue" data-fragment-index="3" -->      | #2         |

***

&shy;<!-- .element: class="fragment" data-fragment-index="1" -->**Query**:
<span>Information</span><!-- .element: class="fragment highlight-blue" data-fragment-index="2" -->
AND
<span>Search</span><!-- .element: class="fragment highlight-blue" data-fragment-index="3" -->

(#1, #2, #3) AND (#2)<!-- .element: class="fragment fade-in" -->

**&rarr; #2**<!-- .element: class="fragment fade-in" -->

Notes:
Audience question
---

# Time complexity

&Omicron;(num query terms &times; num distinct terms)<!-- .element: class="fragment" data-fragment-index="1" -->

## <!-- .element: class="fragment" data-fragment-index="1" -->Example

* &shy;<!-- .element: class="fragment" data-fragment-index="1" -->*English Wikipedia*: 6M articles, 12B characters, 1.2M
  distinct terms
* &shy;<!-- .element: class="fragment" data-fragment-index="1" -->Term-Document Matrix: 2 query terms &times; 1.2M
  distinct terms = **2.4M lookups**
* &shy;<!-- .element: class="fragment" data-fragment-index="2" -->Inverted Index: 2 query terms &times; 1.2M distinct
  terms = **2.4M lookups**

---

## Size

&Omicron;(num distinct terms &times; average postings list
length)<!-- .element: class="fragment" data-fragment-index="1" -->

## <!-- .element: class="fragment" data-fragment-index="2" -->Example

* &shy;<!-- .element: class="fragment" data-fragment-index="2" -->*English Wikipedia*: 6M articles, 12B characters, 1.2M
  distinct terms
* &shy;<!-- .element: class="fragment" data-fragment-index="2" -->Term-Document Matrix: 1.2M distinct terms &times; 6M
  articles = 7.200.000.000.000 cells = 7.2 terrabit = **900 gigabyte**
* &shy;<!-- .element: class="fragment" data-fragment-index="3" -->Inverted Index: 1.2M distinct terms &times; 10K
  postings per terms &times; 4 bytes per document ID = 48.000.000.000 bytes = **48 gigabyte**
