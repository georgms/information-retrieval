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

# Nomenclature

<dl>
  <dt>Information need</dt><!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>What the user is looking for:<p><em>I want to learn about information retrieval and search</em></p></dd><!-- .element: class="fragment" data-fragment-index="1" -->

  <dt>Query</dt><!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>How the user talks to the computer:<p><code>(information AND retrieval) OR search</code></p></dd><!-- .element: class="fragment" data-fragment-index="2" -->
</dl>

&shy;<!-- .element: class="fragment" --> Voice assistants, ChatGPT bridge the gap between *information need* and *query*

Notes:
---

# Simple Boolean Retrieval Implementation

1. Calculate result lists for every query term: Grep
2. Apply boolean operators: Intersect, Union

---

# Grep

<!-- .slide: class="audience-question" -->

* Query: *book*
* Document: *a book about information retrieval*

Compare query with document, from first to last character

1. <!-- .element: class="fragment fade-in-then-out" data-fragment-index="1" --><span>a␣bo</span><!-- .element: class="fragment highlight-blue" data-fragment-index="1" -->ok about information retrieval
2. <!-- .element: class="fragment fade-in-then-out" data-fragment-index="2" -->a<span>␣boo</span><!-- .element: class="fragment highlight-blue" data-fragment-index="2" -->k about information retrieval
3. <!-- .element: class="fragment" data-fragment-index="3" -->a <span>book</span><!-- .element: class="fragment highlight-blue" data-fragment-index="3" --> about information retrieval <span>&rarr; Match</span><!-- .element: class="fragment" style="color: green;" -->

Notes:
What are some issues with grep?
---

# Calculate result lists

## Generate a list of terms from the query

```
(information AND retrieval) OR search
```

&darr;

1. *information*
2. *retrieval*
3. *search*

## Grep every term in every document

1. *a book about information retrieval*
2. *a book about the search for information*
3. *a book about retrieving information*

Notes:
---
<!-- .slide: class="audience-question" -->

# Generate result lists

**Query term: *information***
&rarr; <span>[#1, #2, #3]</span><!-- .element: class="fragment" data-fragment-index="1" -->

* #1 *a book about information retrieval*
* #2 *a book about the search for information*
* #3 *a book about retrieving information*

**Query term: *retrieval*** &rarr; <span>[#1]</span><!-- .element: class="fragment" data-fragment-index="2" -->

* #1 *a book about information retrieval*
* #2 *a book about the search for information*
* #3 *a book about retrieving information*

**Query term: *search*** &rarr; <span>[#2]</span><!-- .element: class="fragment" data-fragment-index="3" -->

* #1 *a book about information retrieval*
* #2 *a book about the search for information*
* #3 *a book about retrieving information*

Notes:
Audience question
---

<!-- .slide: class="audience-question" --> 

# Intersect / Union

* &shy;<!-- .element: class="fragment" data-fragment-index="1" --> \#1: _a book about information retrieval_

* &shy;<!-- .element: class="fragment" data-fragment-index="1" --> \#2: _a book about the search for information_
* &shy;<!-- .element: class="fragment" data-fragment-index="1" --> \#3: _a book about retrieving information_

```
(information AND retrieval) OR search
```

<!-- .element: class="fragment" data-fragment-index="1" -->

![...](images/grep.png) <!-- .element: class="fragment" data-fragment-index="2" -->

Notes:
Audience question
---

# Complexity

* [Big &Omicron; notation](https://en.wikipedia.org/wiki/Big_O_notation)
* Describe time or memory complexity of algorithms and data structures
* Which inputs influence their runtime and memory requirements?
* Look at worst case

---

# Time complexity examples

*How many loops do you need?*

| Big &Omicron; | Name      | Example                           | Explanation                                   |
|---------------|-----------|-----------------------------------|-----------------------------------------------|
| Ο(1)          | Constant  | Odd or even number?               | No loop                                       |
| Ο(n)          | Linear    | Calculate array sum               | Iterate over all values                       |
| Ο(n²)         | Quadratic | Find duplicates in unsorted array | Compare every value against every other value |

---

<!-- .slide: class="audience-question" -->

# Complexity

## Grep

Search every query term as a string in every document: <!-- .element: class="fragment" -->

$$O(\text{num query terms} \times \text{total length of all documents})$$<!-- .element: class="fragment" -->

## Union

Merge result lists (without duplicates): <!-- .element: class="fragment" -->

$$O(\text{number of results})$$<!-- .element: class="fragment" -->

## Intersect

Compare the first result list with every other: <!-- .element: class="fragment" -->

$$O(\text{num query terms} \times \text{num results per query term})$$<!-- .element: class="fragment" -->

Notes:
Audience question
---

# Grep complexity

* $O(\text{num query terms} \times \text{total length of all documents})$
* Can take reaaally long

#### <!-- .element: class="fragment" data-fragment-index="1" --> Example

* &shy;<!-- .element: class="fragment" data-fragment-index="1" -->*English Wikipedia*: 6M articles, 12B characters, 1.2M
  distinct terms
* &shy;<!-- .element: class="fragment" data-fragment-index="1" -->grep: 2 query terms &times; 12GB = **24 billion string
  comparisons**

Notes:
How can this be improved?
---

# Grep disadvantages

* &shy;<!-- .element: class="fragment" -->   Does _books_ match _book_?
    * &shy;<!-- .element: class="fragment" -->Cannot deal with singular / plural, *books* does not match *book*.
* &shy;<!-- .element: class="fragment" --> _go_ vs _went_
* &shy;<!-- .element: class="fragment" --> _running_ vs _run_
* &shy;<!-- .element: class="fragment" --> _go_ vs _gong_

Not user friendly!<!-- .element: class="fragment" -->

Notes:
More examples?
