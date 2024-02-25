# Phonetic correction

*Meyer, Mayer, Maier?*

Notes:
---
# Soundex

* &shy;<!-- .element: class="fragment" --> For proper names, brand names, drugs
* &shy;<!-- .element: class="fragment" --> Encode strings according to their sounds
* &shy;<!-- .element: class="fragment" --> `Meier` &rarr; `M600`

Notes:
---
# Index

| Term (not in index)                                                                               | Soundex                                                                   | Doc IDs                                                                      |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|------------------------------------------------------------------------------|
| _<span class="fragment highlight-blue" data-fragment-index="3">meier</span>, maier, mayer, meyer_ | <span class="fragment highlight-blue" data-fragment-index="3">M600</span> | <span class="fragment highlight-blue" data-fragment-index="3">1, 3, 5</span> |
| _müller, mueller_                                                                                 | M460                                                                      | 2, 4, 6                                                                      |
| _goethe, göthe_                                                                                   | G300                                                                      | 7, 8, 9                                                                      |

# Query

| Query                                                                    | Index Term                                      | Doc IDs                                          |
|--------------------------------------------------------------------------|-------------------------------------------------|--------------------------------------------------|
| &shy;<!-- .element: class="fragment" data-fragment-index="3" --> `Meier` | &shy;<!-- .element: class="fragment" --> `M600` | &shy;<!-- .element: class="fragment" --> 1, 3, 5 |
| &shy;<!-- .element: class="fragment" --> `Mayer`                         | &shy;<!-- .element: class="fragment" --> `M600` | &shy;<!-- .element: class="fragment" --> 1, 3, 5 |

Notes:
---

# Precision and recall?

* &shy;<!-- .element: class="fragment" data-fragment-index="1" -->Recall up
* &shy;<!-- .element: class="fragment" data-fragment-index="1" --> Precision down

Notes:

* How does this affect precision and recall?
---
# Soundex alternatives

* Daitch–Mokotoff Soundex
* Metaphone
* Double Metaphone

Notes:
