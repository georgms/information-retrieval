# Tokenization

Notes:
---
# Tokenization

> a book about information retrieval <!-- .element: class="fragment" data-fragment-index="1" -->

&darr; <!-- .element: class="fragment" data-fragment-index="2" -->

`[a, book, about, information, retrieval]` <!-- .element: class="fragment" data-fragment-index="2" -->

> "Information Retrieval": Also available as e-book! <!-- .element: class="fragment" data-fragment-index="3" -->

&darr; <!-- .element: class="fragment" data-fragment-index="4" -->

`[Information Retrieval]? [Information, Retrieval]?` <!-- .element: class="fragment" data-fragment-index="4" -->

`[e-book]? [eBook]? [e, book]?` <!-- .element: class="fragment" data-fragment-index="4" -->

Notes:
---
# Challenge

Inverted index can only find exact tokens

| Term        | Doc IDs    |
|-------------|------------|
| book        | #1, #2, #3  |
| information | #1, #2, #3  |
| retrieval   | #1          |
| search      | #2          |

 _e-book_ will return no results!

Notes:
---
# Challenge

* <!-- .element: class="fragment" --> How can _books_ find _book_?
* <!-- .element: class="fragment" --> _wi-fi_  &leftrightarrow; _wifi_?
* <!-- .element: class="fragment" --> _Jack's_  &leftrightarrow; _Jack_?
* <!-- .element: class="fragment" --> _MMT_ &leftrightarrow; _Multimediatechnology_?
* <!-- .element: class="fragment" --> _U.S.A._ &leftrightarrow; _USA_?
* <!-- .element: class="fragment" --> _running_ &leftrightarrow; _  run_?

Notes:
---
# Text analysis

* Analyze docs and query
* Add, remove, change terms

Notes:
---
# Nomenclature

## Token <!-- .element: class="fragment" data-fragment-index="1" -->
* Character sequence, meaningful semantic unit <!-- .element: class="fragment" data-fragment-index="1" -->
* No analysis yet <!-- .element: class="fragment" data-fragment-index="1" -->
* <!-- .element: class="fragment" data-fragment-index="1" --> _the_, _routers_, _the_

## Type <!-- .element: class="fragment" data-fragment-index="2" -->
* Distinct tokens, same token counts only once <!-- .element: class="fragment" data-fragment-index="2" -->
* <!-- .element: class="fragment" data-fragment-index="2" --> _the_, _routers_

## Terms <!-- .element: class="fragment" data-fragment-index="3" -->
* Index tokens <!-- .element: class="fragment" data-fragment-index="3" -->
* <!-- .element: class="fragment" data-fragment-index="3" --> _router_
