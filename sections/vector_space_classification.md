# Vector Space Classification
---

# Document as vector

<p class="stretch">![Vectors](../images/Vectors.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>
---
<p class="stretch">![Vector Space Classification](../images/Vector Space Classification.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>
---
# Rocchio Classification

Supports multiple classes

1. Compute center of mass / centroid for class
2. Assign documents to class of the nearest centroid

---

# Rocchio Classification

<p class="stretch">![Rocchio](../images/Rocchio.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

Notes:

What is the class of the new document?
---

# k Nearest Neighbor (kNN)

Supports multiple classes

* Assign document to class of the majority of the k nearest neighbours
* $k = 1$: Closest neighbor
* Usually $k = 3$ or $k = 5$

---

# k Nearest Neighbor (kNN)

<p class="stretch">![kNN](../images/kNN.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

Notes:

What's the class?
---

# Support Vector Machines (SVM)

Supports exactly two classes

* Separate documents into two classes
* By drawing a _line_ between the two classes

Notes:
---

# Which _line_?

<p class="stretch">![SVM Possibilities](../images/SVM Possibilities.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

Notes:

Audience question. Which line and why?
---

# Hyperplane

* 1 dimensional: point
* 2 dimensional: line
* 3 dimensional: plane

Notes:
---

# Which hyperplane?

Choose hyperplane with largest margin:

Larger margin

&darr;

More wiggle room for both classes

&darr;

More confident decision

Notes:
---

# Hyperplane with largest margin

<p class="stretch">![SVM Solution](../images/SVM Solution.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

Notes:
---

# SVM Outliers

<p class="stretch">![SVM Outliers](../images/SVM Outliers Problem.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

Notes:
---

# Outliers decrease margin

<p class="stretch">![SVM Outliers](../images/SVM Outliers.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

Notes:
---

# SVM Outliers

* Outliers could be noise
* Ignore for greater margin
* Pay penalty for each outlier

Notes:
---

# SVM Outliers

<p class="stretch">![SVM Outliers](../images/SVM Outliers Solved.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

Notes:
---

# Linearly inseparable data

<p class="stretch">![SVM not separable](../images/SVM not separable.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>
Notes:
---
# SVM Kernel Trick

Transform to higher dimension

<p class="stretch">![SVM Kernel Trick](../images/SVM Kernel Trick.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>
Notes:
---
# Which classifier to use?

* Is the problem linear?
* Can a hyperplane separate the classes?

<p class="stretch">![Linear Non-Linear](../images/Linear Non-Linear.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>
---
# Classifier types

* Linear classifier: Separates classes with hyperplane
* Non-Linear classifier: Opposite
* Linear classifier is more robust
* But cannot solve non-linear problems

Notes:
---

# Is classifier linear?

1. Classify new document
2. Do this many times
3. Is border between classes a hyperplane?

---

# Rocchio Classification: Linear?

<p class="stretch">![Rocchio](../images/Rocchio.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>
---
# Rocchio Classification: Linear

<p class="stretch">![Rocchio Linear](../images/Rocchio Linear.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>
---
# kNN: Linear?

<p class="stretch">![kNN](../images/kNN.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>
---
# kNN: Non-Linear

<p class="stretch">![kNN Non-Linear](../images/kNN Non-Linear.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>
---
# SVM

<p class="stretch">![SVM Solution](../images/SVM Solution.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

Linear? *Yes*<!-- .element: class="fragment" data-fragment-index="" -->
Notes:
---
<p class="stretch">![Rocchio Linear](../images/Rocchio Linear.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

* Bias: *high*<!-- .element: class="fragment" data-fragment-index="" -->
* Variance: *low*<!-- .element: class="fragment" data-fragment-index="" -->

---
<p class="stretch">![kNN Non-Linear](../images/kNN Non-Linear.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

* Bias: *low*<!-- .element: class="fragment" data-fragment-index="" -->
* Variance: *high*<!-- .element: class="fragment" data-fragment-index="" -->

---
<p class="stretch">![SVM Solution](../images/SVM Solution.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

* Bias: *high*<!-- .element: class="fragment" data-fragment-index="" -->
* Variance: *low*<!-- .element: class="fragment" data-fragment-index="" -->
