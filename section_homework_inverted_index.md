# Homework

Implement boolean retrieval using inverted index

Notes:
---
```
Enter query, empty to quit:

? this text
['resources/1.txt', 'resources/2.txt', 'resources/3.txt']

Enter query, empty to quit:

? another Text
['resources/2.txt']

Enter query, empty to quit:

? Words
['resources/1.txt']

Enter query, empty to quit:

? blubbergurken
[]

Enter query, empty to quit:

? blubbergurken text
[]

Enter query, empty to quit:
?
```
<!-- .element: class="stretch" -->

Notes:
---
# Homework

* Build **Inverted Index** from text files
* [Use the provided setup](https://gitlab.mediacube.at/information-retrieval/homework-1-inverted-index), make sure to read [`README.md`](https://gitlab.mediacube.at/information-retrieval/homework-1-inverted-index/-/blob/master/README.md)
* Read `resources/*.txt`
    * Just once during start up, not for every query
* Query using implicit AND (`this text` &rarr; `this AND text`)
* Your application should be able to handle millions of files efficiently
    * Carefully think about what you can pre-calculate during indexing to save time while searching
* **Focus on correct implementation of the required algorithms and data structures**
  * Avoid long iterations, lookups should be fast.
* Use the provided CLI to manually test your application (see `README.md`)
* Ensure that the provided test cases run successfully (see `README.md`)

Notes:
