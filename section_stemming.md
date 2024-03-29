# Stemming

Notes:
---
# Stemming

* Reduce word endings to find common stem:
    * *housing*, *houses*, *house* &rarr; *hous*
* Heuristic approach, not linguistic
* May find common stem for different concepts:
    * *organic* &rarr; *organ*

Notes:
---
# Porter Stemmer

Implemented in Snowball Stemming DSL

| Match | Replace | Example                            |
|-------|---------|------------------------------------|
| SSES  | SS      | caresses &rarr; caress             |
| IES   | I       | ponies &rarr; poni, ties &rarr; ti |
| SS    | SS      | caress &rarr; caress               |
| S     | _empty_ | cats &rarr; cat                    |

… and so on

Purely algorithmitc, no linguistic knowledge. But usually good enough.

Notes:
---
# Lemmatization

* Determine root based on linguistic rules
* Keeps the type of word:
    * *A saw* &rarr; *saw*, *I saw* &rarr; *see*
* Can generate inflections, e.g., what's the plural of *house*?
* Benefits of lemmatization over stemming doubtful

Notes:
