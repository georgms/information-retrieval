# Homework

Implement TF-IDF scoring

Notes:
---
```
Enter query, empty to quit: salzburg
Found 28 results, showing top 5

Archbishopric_of_Salzburg.txt: 39629.857142857145
salzburg: 39629.857142857145

Herbert_von_Karajan.txt: 10808.142857142857
salzburg: 10808.142857142857

Wolfgang_Amadeus_Mozart.txt: 10808.142857142857
salzburg: 10808.142857142857

Alfons_Schuhbeck.txt: 3602.714285714286
salzburg: 3602.714285714286

Carl_Maria_von_Weber.txt: 3602.714285714286
salzburg: 3602.714285714286
```
<!-- .element: class="stretch" -->

Notes:
---
```
Enter query, empty to quit: austria germany
Found 1713 results, showing top 5

Anschluss.txt: 3891.5421630618653
austria: 3729.5704225352115
germany: 161.97174052665383

Austria.txt: 3794.359118745873
austria: 3729.5704225352115
germany: 64.78869621066153

Germany.txt: 2686.44960062236
austria: 710.3943661971831
germany: 1976.0552344251766

Treaty_of_Versailles.txt: 2650.6333143368884
austria: 1775.9859154929577
germany: 874.6473988439307

Prussia.txt: 1858.6827548463548
austria: 1243.1901408450703
germany: 615.4926140012846
```
<!-- .element: class="stretch" -->

Notes:
---
# Homework

* Implement TF-IDF scoring
* This means **OR** search
* [Use the provided setup](https://gitlab.mediacube.at/information-retrieval/homework-2-tf-idf-scoring), make sure to read [`README.md`](https://gitlab.mediacube.at/information-retrieval/homework-2-tf-idf-scoring/-/blob/master/README.md)
* Display top 5 results
    * For each result show total score and per-term score
    * The sum of all term scores must equal the total score
* Depending on your tokenization the exact scores may differ
* **Focus on correct implementation of the required algorithms and data structures**
    * Avoid long iterations, lookups should be fast.
* Bonus points:
    * Implement TF normalization
    * Parallelize indexing
    * Surprise me

Notes:
