# Stop Words

Notes:
---

# Stop words

* Add no meaning: *table* should find *a table* and *the table*
* Inflate index size
* Manually curated list
* [Default english stop words for Elasticsearch](https://github.com/apache/lucene/blob/main/lucene/analysis/common/src/java/org/apache/lucene/analysis/en/EnglishAnalyzer.java#L48)
* Start with top terms in the collection
* Can be domain-specific
    * E.g., *doctor*, *patient* in medical documents

Notes:

* What could be the problem with stop words?

---

<!-- .slide: class="audience-question" -->

# Stop words, but...

* &shy;<!-- .element: class="fragment" -->*The Police* will find *police car*
* &shy;<!-- .element: class="fragment" -->*The President of Austria* will find *President of the United States visits Austria*
* &shy;<!-- .element: class="fragment" -->*To be or not to be* will find everything / nothing

Notes:
What are some examples where stop words are relevant?
---

# Stop words in real life

* Index size is not an issue anymore
* Elasticsearch: Stop words are optional, but increase score if they are matched
    * *The Police* will find *police car*, but rank *The Police* higher
* No special handling for stop words when the query consists only of stop words
    * *To be or not to be* searches for `[to, be, or, not]`

Notes:
