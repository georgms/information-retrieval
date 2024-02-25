# Vector Space Classification
---

# Document as vector

&shy;<!-- .element: class="stretch" -->
![Vectors](../images/Vectors.svg)
<!-- .element: style="border: none; box-shadow: none;" -->
---
&shy;<!-- .element: class="stretch" -->
![Vector Space Classification](../images/Vector_Space_Classification.svg)
<!-- .element: style="border: none; box-shadow: none;" -->
---
# Rocchio Classification

Supports multiple classes

1. Compute center of mass / centroid for class
2. Assign documents to class of the nearest centroid

---

# Rocchio Classification

&shy;<!-- .element: class="stretch" -->
![Rocchio](../images/Rocchio.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

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

&shy;<!-- .element: class="stretch" -->
![kNN](../images/kNN.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

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

&shy;<!-- .element: class="stretch" -->
![SVM Possibilities](../images/SVM_Possibilities.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

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

&shy;<!-- .element: class="stretch" -->
![SVM Solution](../images/SVM_Solution.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

Notes:
---

# SVM Outliers

&shy;<!-- .element: class="stretch" -->
![SVM Outliers](../images/SVM_Outliers_Problem.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

Notes:
---

# Outliers decrease margin

&shy;<!-- .element: class="stretch" -->
![SVM Outliers](../images/SVM_Outliers.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

Notes:
---

# SVM Outliers

* Outliers could be noise
* Ignore for greater margin
* Pay penalty for each outlier

Notes:
---

# SVM Outliers

&shy;<!-- .element: class="stretch" -->
![SVM Outliers](../images/SVM_Outliers_Solved.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

Notes:
---

# Linearly inseparable data

&shy;<!-- .element: class="stretch" -->
![SVM not separable](../images/SVM_not_separable.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

Notes:
---
# SVM Kernel Trick

Transform to higher dimension

&shy;<!-- .element: class="stretch" -->
![SVM Kernel Trick](../images/SVM_Kernel_Trick.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

Notes:
---
# Which classifier to use?

* Is the problem linear?
* Can a hyperplane separate the classes?

&shy;<!-- .element: class="stretch" -->
![Linear Non-Linear](../images/Linear_Non-Linear.svg)
<!-- .element: style="border: none; box-shadow: none;" -->
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

&shy;<!-- .element: class="stretch" -->
![Rocchio](../images/Rocchio.svg)
<!-- .element: style="border: none; box-shadow: none;" -->
---
# Rocchio Classification: Linear

&shy;<!-- .element: class="stretch" -->
![Rocchio Linear](../images/Rocchio_Linear.svg)
<!-- .element: style="border: none; box-shadow: none;" -->
---
# kNN: Linear?

&shy;<!-- .element: class="stretch" -->
![kNN](../images/kNN.svg)
<!-- .element: style="border: none; box-shadow: none;" -->
---
# kNN: Non-Linear

&shy;<!-- .element: class="stretch" -->
![kNN Non-Linear](../images/kNN_Non-Linear.svg)
<!-- .element: style="border: none; box-shadow: none;" -->
---
# SVM

&shy;<!-- .element: class="stretch" -->
![SVM Solution](../images/SVM_Solution.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

Linear? *Yes*<!-- .element: class="fragment" data-fragment-index="" -->
Notes:
---
&shy;<!-- .element: class="stretch" -->
![Rocchio Linear](../images/Rocchio_Linear.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

* Bias: *high*<!-- .element: class="fragment" data-fragment-index="" -->
* Variance: *low*<!-- .element: class="fragment" data-fragment-index="" -->

---
&shy;<!-- .element: class="stretch" -->
![kNN Non-Linear](../images/kNN_Non-Linear.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

* Bias: *low*<!-- .element: class="fragment" data-fragment-index="" -->
* Variance: *high*<!-- .element: class="fragment" data-fragment-index="" -->

---
&shy;<!-- .element: class="stretch" -->
![SVM Solution](../images/SVM_Solution.svg)
<!-- .element: style="border: none; box-shadow: none;" -->

* Bias: *high*<!-- .element: class="fragment" data-fragment-index="" -->
* Variance: *low*<!-- .element: class="fragment" data-fragment-index="" -->
