# Fuzzy search

Find documents with words similar to _bock_

e.g. _book_, _rock_, _spock_.

&darr;

`bock~`

Notes:

---

# Levenshtein

* Edit distance between two words
* Count inserts, deletes, replaces, transpositions / swaps

Notes:

---

<!-- .slide: class="audience-question" -->

# Levenshtein example

| Operation                                                            | Result                                                |
|----------------------------------------------------------------------|-------------------------------------------------------|
| 0. Start                                                             | iformmetoin~                                          |
| &shy;<!-- .element: class="fragment" --> 1. Add **n**                | &shy;<!-- .element: class="fragment" --> informmetoin |
| &shy;<!-- .element: class="fragment" --> 2. Delete **m**             | &shy;<!-- .element: class="fragment" --> informetoin  |
| &shy;<!-- .element: class="fragment" --> 3. Replace **e** with **a** | &shy;<!-- .element: class="fragment" --> informatoin  |
| &shy;<!-- .element: class="fragment" --> 4. Swap **o** and **i**     | &shy;<!-- .element: class="fragment" --> information  |
| &shy;<!-- .element: class="fragment" --> The End                     |                                                       |

&shy;<!-- .element: class="fragment" --> Levenshtein distance = 4

Notes:

* Audience question
* How can this be used to find similar terms?

---

<!-- .slide: class="audience-question" -->

`bock~`

&darr;

| Term        | Doc IDs | Levenshtein distance (not in index) |
|-------------|---------|-------------------------------------|
| book        | #1      | 1                                   |
| information | #2      | >2                                  |
| rock        | #3      | 1                                   |
| retrieval   | #4      | >2                                  |
| spock       | #5      | 2                                   |

&darr;

(consider only terms with Levenshtein distance <2)

&darr;

`book OR rock OR spock`

&darr;

#1, #3, #5

Notes:

* What is the complexity?

---

# Levenshtein complexity

<!-- .slide: class="audience-question" -->

* Expensive: Cannot be precomputed\*
* Compare every query term with every vocabular term
* `num(query terms) × num(vocabulary terms)`

\*Except with some highly complex finite state machines

Notes:

---

# Levenshtein improvements

* Weighted (keyboard distance)
* Maximum allowed Levenshtein distance based on query term length
    * E.g. 0-2 must match exactly; 3-5 one edit allowed; >5 two edits allowed
    * Otherwise `e~` would match everything

Notes:

---

# N-Grams

<!-- .slide: class="audience-question" -->

Notes:

* How can this be used for fuzzy search?

---

# N-Gram index

\#1: `book`, \#2: `rock`, \#3: `spock`

<table>
    <thead>
    <tr>
        <th>Term</th>
        <th>Doc IDs</th>
    </tr>
    </thead>
    <tbody class="fragment">
    <tr>
        <td>^bo</td>
        <td>#1</td>
    </tr>
    <tr>
        <td>boo</td>
        <td>#1</td>
    </tr>
    <tr>
        <td>ook</td>
        <td>#1</td>
    </tr>
    <tr>
        <td>ok^</td>
        <td>#1</td>
    </tr>
    <tr>
        <td>^ro</td>
        <td>#2</td>
    </tr>
    <tr>
        <td>roc</td>
        <td>#2</td>
    </tr>
    <tr>
        <td>^sp</td>
        <td>#3</td>
    </tr>
    <tr>
        <td>spo</td>
        <td>#3</td>
    </tr>
    <tr>
        <td>poc</td>
        <td>#3</td>
    </tr>
    <tr>
        <td>ock</td>
        <td>#2 ,#3</td>
    </tr>
    <tr>
        <td>ck^</td>
        <td>#2, #3</td>
    </tr>
    </tbody>
</table>

Notes:

---
`bock`

&darr;

`^bo OR boc OR ock OR ck^`

&darr;

| Term                                         | Doc IDs                                          |
|----------------------------------------------|--------------------------------------------------|
| ^bo<!-- .element: class="highlight-blue" --> | #1<!-- .element: class="highlight-blue" -->      |
| boo                                          | #1                                               |
|                                              | …                                                |
| poc                                          | #3                                               |
| ock<!-- .element: class="highlight-blue" --> | <!-- .element: class="highlight-blue" --> #2 ,#3 |
| ck^<!-- .element: class="highlight-blue" --> | <!-- .element: class="highlight-blue" --> #2, #3 |

Which document is the best match?

Notes:

---

| Term                                         | Doc IDs                                          |
|----------------------------------------------|--------------------------------------------------|
| ^bo<!-- .element: class="highlight-blue" --> | #1<!-- .element: class="highlight-blue" -->      |
| boo                                          | #1                                               |
|                                              | …                                                |
| poc                                          | #3                                               |
| ock<!-- .element: class="highlight-blue" --> | <!-- .element: class="highlight-blue" --> #2 ,#3 |
| ck^<!-- .element: class="highlight-blue" --> | <!-- .element: class="highlight-blue" --> #2, #3 |

&darr;

1. [<span>^bo</span><!-- .element: class="highlight-blue" -->, boo, ook, ok^] &rarr; 25%
2. [^ro, roc, <span>ock</span><!-- .element: class="highlight-blue" -->, <span>ck^</span><!-- .element: class="highlight-blue" -->]
   &rarr; 50%
3. [^sp, spo, poc, <span>ock</span><!-- .element: class="highlight-blue" -->, <span>ck^</span><!-- .element: class="highlight-blue" -->]
   &rarr; 40%

Notes:
