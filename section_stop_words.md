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

* &shy;<!-- .element: class="fragment" -->*The Police* (the band) will find *police car*
* &shy;<!-- .element: class="fragment" -->*To be or not to be* will find everything / nothing

Notes:
What are some examples where stop words are relevant?
---

# Stop words example

<a class="es-console" href="es-consoles/stop-words.http">Try stop words in Elasticsearch</a>.

Notes:
