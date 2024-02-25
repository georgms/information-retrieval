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

| Term (not in index) | Soundex | Doc IDs |
|----------------------------|---------|---------|
| _<span class="fragment highlight-blue" data-fragment-index="3">meier</span>, maier, mayer, meyer_ |<span class="fragment highlight-blue" data-fragment-index="3">M600</span> | <span class="fragment highlight-blue" data-fragment-index="3">1, 3, 5</span> |
| _müller, mueller_ | M460 | 2, 4, 6 |
| _goethe, göthe_ | G300 | 7, 8, 9 |
<!-- .element: class="fragment" data-fragment-index="1" -->

# Query <!-- .element: class="fragment" data-fragment-index="2" -->

<p><span class="fragment" data-fragment-index="2">`Meier` &rarr; `M600`</span><span class="fragment"
                                                                                    data-fragment-index="3">&rarr; 1, 3, 5</span>
</p>
<p><span class="fragment" data-fragment-index="4">`Maier` &rarr; `M600` &rarr; 1, 3, 5</span></p>

Notes:
* How does this affect precision and recall?
---
# Result quality

* &shy;<!-- .element: class="fragment" data-fragment-index="1" -->Recall up
* &shy;<!-- .element: class="fragment" data-fragment-index="1" --> Precision down

Notes:
---
# Soundex alternatives

* Daitch–Mokotoff Soundex
* Metaphone
* Double Metaphone

Notes:
