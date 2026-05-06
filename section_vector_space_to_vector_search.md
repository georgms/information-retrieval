 # Issues

Words are represented as very sparse one-hot vectors:

$$\vec{V}(\text{book}) = \begin{pmatrix}0 \\\\ 0 \\\\ 0 \\\\ ... \\\\ 1 \\\\ 0\end{pmatrix}$$

* One vector component is 1, all others are 0.
* This takes up a lot of space.
* Document vectors are also sparse.

---

# Issues

Semantically similar words have completely different vectors.

<div class="jsxgraph" style="width: 1000px; height: 600px; margin: auto;">
  <!--
  {
    "boundingbox": [-0.1, 2, 2, -0.1],
    "axis": true,
    "grid": false
  }
  -->
  <script type="text/template">
    board.create('arrow', [[0,0],[1,0]], { name: 'cat', withLabel: true, strokeColor: 'orange', label: { position: 'rt', autoPosition: true }});
    board.create('arrow', [[0,0],[0,1]], { name: 'dog', withLabel: true, strokeColor: 'orange', label: { position: 'rt', autoPosition: true } });
  </script>
</div>


---

# Issues

<!-- .slide: class="audience-question" -->

Similarity slow to compute.

Query vector needs to be compared with every document vector. <!-- .element: class="fragment" -->

Notes:

* Why is similarity slow to compute?

---

Let's bring back the old term-document matrix.

---

1.	Cats and dogs are common household pets. Many pet owners read a book about animal care.
2.	Dogs are loyal pets, and cats are independent pets. A veterinarian may search a handbook for information about nutrition.
3.	Cats like milk, and many cats enjoy quiet homes. Pet behavior books explain why animals need routines.
4.	This book is about search engines, indexing, and information retrieval for digital libraries.
5.	Search engines index information from documents. Good retrieval systems help users find relevant books and articles.
6.	This book explains information retrieval, ranking, and search. Example queries include finding pet care information.

---

| Document | cats | dogs | pets | pet | animal | care | book | search | engines | index | information | retrieval | documents | queries |
|----------|------|------|------|-----|--------|------|------|--------|---------|-------|-------------|-----------|-----------|---------|
| 1.       | 1    | 1    | 1    | 1   | 1      | 1    | 1    | 0      | 0       | 0     | 0           | 0         | 0         | 0       |
| 2.       | 1    | 1    | 2    | 0   | 0      | 0    | 0    | 1      | 0       | 0     | 1           | 0         | 0         | 0       |
| 3.       | 2    | 0    | 0    | 1   | 0      | 0    | 1    | 0      | 0       | 0     | 0           | 0         | 0         | 0       |
| 4.       | 0    | 0    | 0    | 0   | 0      | 0    | 1    | 1      | 1       | 0     | 1           | 1         | 0         | 0       |
| 5.       | 0    | 0    | 0    | 0   | 0      | 0    | 1    | 1      | 1       | 1     | 1           | 1         | 1         | 0       |
| 6.       | 0    | 0    | 0    | 1   | 0      | 1    | 1    | 1      | 0       | 0     | 2           | 1         | 0         | 1       |


Terms that appear in the same document are more similar. <!-- .element: class="fragment" -->

Documents with similar terms are more similar. <!-- .element: class="fragment" -->

---

Reduce the dimensionality of document vectors to 2 to plot them.

---

Apply Singular Value Decomposition (SVD) to the term-document matrix.

| Document |  Dim 1 |  Dim 2 |
|----------|-------:|-------:|
| 1.       | -1.629 |  1.774 |
| 2.       | -1.795 |  1.229 |
| 3.       | -1.227 |  1.355 |
| 4.       | -1.783 | -1.045 |
| 5.       | -1.964 | -1.305 |
| 6.       | -2.694 | -0.866 |

---

Map the vectors across these two dimensions.

<div class="jsxgraph" style="width: 1000px; height: 600px; margin: auto;">
  <!--
  {
    "boundingbox": [-3, 2.5, 0.5, -2],
    "axis": true,
    "grid": false
  }
  -->
  <script type="text/template">
    board.create('arrow', [[0,0],[-1.629,1.774]], { name: '1.', withLabel: true, label: { position: 'lft', autoPosition: true }});
    board.create('arrow', [[0,0],[-1.795,1.229]], { name: '2.', withLabel: true, label: { position: 'lft', autoPosition: true } });
    board.create('arrow', [[0,0],[-1.227,1.355]], { name: '3.', withLabel: true, label: { position: 'lft', autoPosition: true } });
    board.create('arrow', [[0,0],[-1.783,-1.045]], { name: '4.', withLabel: true, label: { position: 'lft', autoPosition: true } });
    board.create('arrow', [[0,0],[-1.964,-1.305]], { name: '5.', withLabel: true, label: { position: 'lft', autoPosition: true } });
    board.create('arrow', [[0,0],[-2.694,-0.866]], { name: '6.', withLabel: true, label: { position: 'lft', autoPosition: true } });
  </script>
</div>

&shy;<!-- .element: class="fragment" --> Two clusters emerge – _pets_ and _information_.

---

<!-- .slide: class="audience-question" -->

_Search_ for terms

Notes:

* How to search for terms?

---

Apply SVD but reduce document dimensions to 2:

| Term        |  Dim 1 |  Dim 2 |
|-------------|-------:|-------:|
| cats        | -1.263 |  1.803 |
| dog         | -0.777 |  0.944 |
| information | -2.348 | -0.900 |

Only works for known terms.<!-- .element: class="fragment" -->

---

Let's try to map the vectors across only two dimensions.

<div class="jsxgraph" style="width: 1000px; height: 600px; margin: auto;">
  <!--
  {
    "boundingbox": [-3, 2.5, 0.5, -2],
    "axis": true,
    "grid": false
  }
  -->
  <script type="text/template">
    board.create('arrow', [[0,0],[-1.629,1.774]], { name: '1.', withLabel: true, label: { position: 'lft', autoPosition: true }});
    board.create('arrow', [[0,0],[-1.795,1.229]], { name: '2.', withLabel: true, label: { position: 'lft', autoPosition: true } });
    board.create('arrow', [[0,0],[-1.227,1.355]], { name: '3.', withLabel: true, label: { position: 'lft', autoPosition: true } });
    board.create('arrow', [[0,0],[-1.783,-1.045]], { name: '4.', withLabel: true, label: { position: 'lft', autoPosition: true } });
    board.create('arrow', [[0,0],[-1.964,-1.305]], { name: '5.', withLabel: true, label: { position: 'lft', autoPosition: true } });
    board.create('arrow', [[0,0],[-2.694,-0.866]], { name: '6.', withLabel: true, label: { position: 'lft', autoPosition: true } });
    board.create('arrow', [[0,0],[-1.263,1.803]], { name: 'cats', withLabel: true, strokeColor: 'green', label: { position: 'lft', autoPosition: true } });
    board.create('arrow', [[0,0],[-0.777,0.944]], { name: 'dog', withLabel: true, strokeColor: 'orange', label: { position: 'lft', autoPosition: true } });
    board.create('arrow', [[0,0],[-2.348,-0.900]], { name: 'information', withLabel: true, strokeColor: 'purple', label: { position: 'lft', autoPosition: true } });
  </script>
</div>
