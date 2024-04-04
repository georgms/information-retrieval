# Wildcard queries

`apple i*`

Notes:

---

# Wildcard queries

<!-- .slide: class="audience-question" -->

Expand query:

`i*`

&darr;

| Term       | Documents  |
|------------|------------|
| galaxy     | #2, #4     |
| **iphone** | #2, #3     |
| **ipad**   | #2, #3, #4 |
| lumia      | #1         |

&darr;

`iphone OR ipad`

&darr;

 #2, #3, #4

Notes:

* How to get prefix queries, i.e. `salz*`? Think of the search tree.

---

# salz

<!-- .slide: class="audience-question" -->

&shy; <!-- .element: class="fragment" --> Comes free with a search tree

&shy;<!-- .element: class="fragment" --> <script class="tree" type="application/json">
{
"name": "S",
"children": [
{
"name": "SA",
"children": [
{
"name": "SAL",
"children": [
{
"name": "SALB"
},
{
"name":  "SALZ",
"children":  [
{
"name": "Salzburg",
"fill": "#1b91ff"
},
{
"name": "Salzach",
"fill": "#1b91ff"
}
]
}
]
},
{
"name": "SAR"
}
]
},
{
"name": "SE"
}
]
}
</script>

Notes:

* How to get suffix search, i.e. `*burg`?

---

# *burg

<!-- .slide: class="audience-question" -->

&shy; <!-- .element: class="fragment" --> Build index with reversed terms

&shy;<!-- .element: class="fragment" --> <script class="tree" type="application/json">
{
"name": "G",
"children": [
{
"name": "GR",
"children": [
{
"name": "GRU",
"children": [
{
"name": "grubuenrok",
"fill": "#1b91ff"
},
{
"name": "grubzlas",
"fill": "#1b91ff"
}
]
},
{
"name": "…"
}
]
},
{
"name": "…"
}
]
}
</script>

Notes:

* How to get infix search, i.e. `sal*urg`?

---

# sal*urg

<!-- .slide: class="audience-question" -->

&shy; <!-- .element: class="fragment" -->Intersect results of `sal*` and `*urg`

Notes:

* Audience question

---

# N-gram queries

`corona`

(3-gram)

&darr;

`[^co, cor, oro, ron, ona, na^]`

Notes:

---

<!-- .slide: class="audience-question" -->

# N-gram index

| Term | Doc IDs    |
|------|------------|
| ^co  | #1, #3, #5 |
| cor  | #1, #2     |
| oro  | #1, #5     |
| ron  | #1, #4     |
| ona  | #1, #2, #4 |
| na^  | #1, #2, #3 |

Notes:

* Can the original contents be reconstructed from the index?

---

# N-gram queries

## Expand query

`cor*`

&darr;

`^co AND cor`

Notes:

---

# N-gram queries

`^co AND cor`

| Term                                                                                               | Doc IDs                                                                                                   |
|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| <span>^co</span><!-- .element: class="fragment highlight-current-blue" data-fragment-index="1" --> | <span>#1</span><!-- .element: class="fragment highlight-current-blue" data-fragment-index="1" -->, #3, #5 |
| <span>cor</span><!-- .element: class="fragment highlight-current-blue" data-fragment-index="1" --> | <span>#1</span><!-- .element: class="fragment highlight-current-blue" data-fragment-index="1" -->, #2     |
| oro                                                                                                | #1, #5                                                                                                    |
| ron                                                                                                | #1, #4                                                                                                    |
| ona                                                                                                | #1, #2, #4                                                                                                |
| na^                                                                                                | #1, #2, #3                                                                                                |

&darr;<!-- .element: class="fragment" data-fragment-index="2" -->

#1<!-- .element: class="fragment" data-fragment-index="2" -->

Notes:

* Audience question
* How can this lead to false positives?

---

# False N-Gram Positives

`cor*`

&darr;

`^co AND cor`

&darr;

<span style="color: var(--fl-color);">^co</span>n<span style="color: var(--fl-color);">cor</span>d

Notes:
