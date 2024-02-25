# Phrase queries

Notes:
---
# Phrase queries

TODO: Inline code is not very distinguishable from regular texts. Use a different color or font.

* &shy;<!-- .element: class="fragment" --> `fh salzburg` should not
  match `In Salzburg there is a University and in Vienna there is an FH`
* &shy;<!-- .element: class="fragment" --> Search for names and concepts: `"fh salzburg"`, `"mountain bike"`
* &shy;<!-- .element: class="fragment" --> Well accepted by users
* &shy;<!-- .element: class="fragment" --> Needs more advanced index with positional information

Notes:
* How could we implement this?
* Can the current index handle this?
---
# Positional index

* \#1: _retrieving more information about information retrieval_
* \#2: _searching and retrieving a book about the search for information_
* \#3: _a book about information_

***

| Terms (excluding stop words) | Doc IDs                                                       |
|------------------------------|---------------------------------------------------------------|
| book                         | #2:[3], #3:[1] <!-- .element: class="fragment" -->            |
| information                  | #1:[2, 3], #2:[5], #3:[2] <!-- .element: class="fragment" --> |
| retriev                      | #1:[1, 4], #2:[2]         <!-- .element: class="fragment" --> |
| search                       | #2:[1, 4]         <!-- .element: class="fragment" -->         |

Notes: Audience question
---
# Intersection algorithm

`"information retrieval"`

1. <!-- .element: class="fragment" data-fragment-index="1" --> Fetch postings for each query term:
    * &shy;<!-- .element: class="fragment" data-fragment-index="1" --> *information*: #1:[2, 3], #2:[5], #3:[2]
    * &shy;<!-- .element: class="fragment" data-fragment-index="1" --> *retriev*: #1:[1, 4], #2:[2]
2. &shy;<!-- .element: class="fragment" data-fragment-index="2" --> Calculate term pair distances per document,
   eg. `retrieval - information`:
    * &shy;<!-- .element: class="fragment" data-fragment-index="3" --> _#1: <span>
      retrieving</span><!-- .element: class="highlight-blue" --> more <span>
      information</span><!-- .element: class="highlight-blue" --> about information retrieval_
        *
      &shy;<!-- .element: class="fragment" data-fragment-index="3" --> [<span>1</span><!-- .element: class="highlight-blue" -->, 4] - [<span>2</span><!-- .element: class="highlight-blue" -->, 3] =
      -1 != 1
    * &shy;<!-- .element: class="fragment" data-fragment-index="4" --> _#1: <span>
      retrieving</span><!-- .element: class="highlight-blue" --> more information about <span>
      information</span><!-- .element: class="highlight-blue" --> retrieval_
        *
      &shy;<!-- .element: class="fragment" data-fragment-index="4" --> [<span>1</span><!-- .element: class="highlight-blue" -->, 4] - [2, <span>3</span><!-- .element: class="highlight-blue" -->] =
      -2 != 1
    * &shy;<!-- .element: class="fragment" data-fragment-index="5" --> _#1: retrieving more <span>
      information</span><!-- .element: class="highlight-blue" --> about information <span>
      retrieval</span><!-- .element: class="highlight-blue" -->_
        *
      &shy;<!-- .element: class="fragment" data-fragment-index="5" --> [1, <span>4</span><!-- .element: class="highlight-blue" -->] - [<span>2</span><!-- .element: class="highlight-blue" -->, 3] =
      2 != 1
    * &shy;<!-- .element: class="fragment" data-fragment-index="6" --> _#1: retrieving more information about <span>
      information</span><!-- .element: class="highlight-blue" --> <span>
      retrieval</span><!-- .element: class="highlight-blue" -->_
        *
      &shy;<!-- .element: class="fragment" data-fragment-index="6" --> [1, <span>4</span><!-- .element: class="highlight-blue" -->] - [2, <span>3</span><!-- .element: class="highlight-blue" -->] =
      1 &rarr; match

Notes:
* Can this use proximity regardless of order, e.g., match "retrieval information" as well?
* Can this support phrase gaps, i.e. `information … retrieval`?
---
# Positional index

Supports phrase gaps: `"dwayne johnson"~2` matches *dwayne the rock johnson*

Notes:
* The most common case is to search for two consecutive words. The intersection algorithm is a bit expensive. Can we speed this up?
---
# Biword index

* Speed up common phrase queries
* Auxiliary index
* Index term pairs
* Fast lookup of term pairs

#1: "Study at FH Salzburg"

&darr;


| Term        | Doc IDs |
|-------------|---------|
| study at    | #1      |
| at fh       | #1      |
| fh salzburg | #1      |

Notes:
