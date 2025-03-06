# Boolean retrieval

`AND`, `OR`, `NOT`
---
Find all **documents** containing the **terms** and satisfying the conditions:

```
fh AND salzburg
```

```
mmt OR mma
```

```
mmt AND NOT mma
```

```
(information AND retrieval) OR search
```

---

# Nomenclature

<dl>
  <dt>Documents</dt><!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>Books, chapters, pages, web pages, news posts...</dd><!-- .element: class="fragment" data-fragment-index="1" -->

  <dt>Document collection, Corpus</dt><!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>All the documents</dd><!-- .element: class="fragment" data-fragment-index="2" -->

  <dt>Terms</dt><!-- .element: class="fragment" data-fragment-index="3" -->
  <dd>Like words, but maybe <em>FH Salzburg</em> and <em>A1</em> as well</dd><!-- .element: class="fragment" data-fragment-index="3" -->
</dl>
---
<!-- .slide: class="audience-question" -->

# Will it match?

```
(information AND retrieval) OR search
```

* &shy;<!-- .element: class="fragment" --> \#1: _a book about information retrieval_ <span>&rarr;
  Match</span><!-- .element: class="fragment" style="color: green;" -->
* &shy;<!-- .element: class="fragment" --> \#2: _a book about the search for information_ <span>&rarr;
  Match</span><!-- .element: class="fragment" style="color: green;" -->
* &shy;   <!-- .element: class="fragment" --> \#3: _a book about information_ <span>&rarr; No
  Match</span><!-- .element: class="fragment" style="color: red;" -->

Notes:
Audience question

---

# Interactive example

Make sure that the [Elastic Stack](elasticsearch-intro/README.md) is running.

Then <a class="es-console" href="elasticsearch-intro/boolean-retrieval.http">try boolean retrieval in the Elasticsearch
console</a>.

---

# Nomenclature

<dl>
  <dt>Information need</dt><!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>What the user is looking for:<p><em>I want to learn about information retrieval and search</em></p></dd><!-- .element: class="fragment" data-fragment-index="1" -->

  <dt>Query</dt><!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>How the user talks to the computer:<p><code>(information AND retrieval) OR search</code></p></dd><!-- .element: class="fragment" data-fragment-index="2" -->
</dl>

&shy;<!-- .element: class="fragment" --> Voice assistants, ChatGPT bridge the gap between *information need* and *query*

Notes:
  