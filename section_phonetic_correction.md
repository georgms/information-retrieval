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

<!-- .slide: class="audience-question" -->

`meier`

&darr;

`M600`

&darr;

| Term (not in index)                                                                               | Soundex                                                                   | Doc IDs                                                                         |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| _<span class="fragment highlight-blue" data-fragment-index="1">meier</span>, maier, mayer, meyer_ | <span class="fragment highlight-blue" data-fragment-index="1">M600</span> | <span class="fragment highlight-blue" data-fragment-index="1">#1, #3, #5</span> |
| _müller, mueller_                                                                                 | M460                                                                      | #2, #4, #6                                                                      |
| _goethe, göthe_                                                                                   | G300                                                                      | #7, #8, #9                                                                      |

&darr;

#1, #3, #5<!-- .element: class="fragment" data-fragment-index="1" -->

Notes:

---

# Precision and recall?

<!-- .slide: class="audience-question" -->

* &shy;<!-- .element: class="fragment" data-fragment-index="1" --> Recall up
* &shy;<!-- .element: class="fragment" data-fragment-index="1" --> Precision down

Notes:

* How does this affect precision and recall?

---

# Soundex alternatives

* Daitch–Mokotoff Soundex
* Metaphone
* Double Metaphone

Notes:
