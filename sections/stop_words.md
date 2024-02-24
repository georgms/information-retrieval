# Stop Words

Notes:
---
# Stop words

* Add no meaning: *table* should find *a table* and * the table*
* Inflate index size
* Manually curated list
* [Default english stop words for Solr](https://github.com/apache/solr/blob/main/solr/server/solr/configsets/_default/conf/lang/stopwords_en.txt)
* Start with top terms in collection
* Can be domain-specific
    * Eg. *doctor*, *patient* in medical documents

Notes:
* What could be the problem with stop words?
---
# Stop words, but...

* *The Police* will find *police car*
* *The President of Austria* will find *President of United States visits Austria*
* *To be or not to be* will find everything / nothing

Notes:
* How to handle this better?
---
# Stop words in real life

* Index size not an issue anymore
* Solr: Stop words are optional, but increase score if they are matched
    * *The Police* will find *police car*, but rank *The Police* higher
* No special handling for stop words when query consists only of stop words
    * *To be or not to be* searches for `[to, be, or, not]`

Notes:
