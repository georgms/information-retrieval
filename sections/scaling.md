# Scaling

Notes:
Scaling reasons?
---
# Scaling reasons

* Queries per second / Traffic / Concurrency  <!-- .element: class="fragment" -->
* Index size / Time per query <!-- .element: class="fragment" -->
* Resiliency <!-- .element: class="fragment" -->

Notes:
---
# Scaling

![scaling](../images/scaling.png) <!-- .element: style="border: none; box-shadow: none;" -->

Notes:
What are the two directions we can scale to?
---
# Scaling up / Vertical

![scaling up](../images/scaling up.png) <!-- .element: style="border: none; box-shadow: none;" -->

Notes:

(Dis-)Advantages of Scaling up?
---
# Scaling up

* \+ Easy
* \+ Little overhead (network, hardware)
* \- No fault-tolerance
* \- No concurrency
* \- Scaling limited by hardware

<!-- .element: style="list-style-type: none;" -->

Notes:
---
# Scaling out / Horizontal

![scaling out](../images/scaling out.png) <!-- .element: style="border: none; box-shadow: none;" -->

Notes:

(Dis-)Advantages of Scaling out?
---
# Scaling out

* \+ Fault-tolerance, resiliency
* \+ Concurrency
* \+ "Unlimited" scaling
* \- Complex
* \- Overhead: Network, Monitoring

<!-- .element: style="list-style-type: none;" -->

Notes:
---
# Distributed search

![Distributed Search](../images/Distributed Search.png) <!-- .element: style="border: none; box-shadow: none;" -->

Notes:
---
# Distributed search

* Partitioned index
* Distributed queries

Notes:
---
# Non-Partitioned index


| Term        | Doc IDs    |
|-------------|------------|
| Book        | #1, #2, #3 |
| Information | #1, #2, #3 |
| Retrieval   | #1         |
| Search      | #2         |


Notes: Audience question: How to partition? There are two ways along the axes of the table.
---
# Partitioned index

* By term
* By doc

Notes:
How can the index be partitioned? Think of the Inverted Index.
---
# Term-partitioned index

<p class="stretch">![Term-partitioned index](../images/Term-partitioned index.png)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

Notes:

(Dis-)Advantages of Term-partitioned index?
---
# Term-partitioned index

* \+ Single term queries are easy
* \- Uneven distribution
* \- Index updates hit all servers

<!-- .element: style="list-style-type: none;" -->

Notes:
---
# Document-partitioned index

<p class="stretch">![Document-partitioned index](../images/Document-partitioned index.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>
Notes:

(Dis-)Advantages of Term-partitioned index?
---
# Document-partitioned index

* \+ Even distribution
* \+ Easy to update index
* \+ Completely independent partial indices
* \- Even single query terms are complex

<!-- .element: style="list-style-type: none;" -->

Notes:
---
# Document-partitioned index

* Number of nodes is fixed
* $\text{node}(\text{doc}) = \text{id}(\text{doc}) \, \% \, \text{num}(\text{nodes})$
* $\text{node}(\text{#4}) = 4 \, \% \, 3 = 1$

Notes:
---
# Distributed query

<p class="stretch">![Document-partitioned query](../images/Document-partitioned query.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>


Notes:

What is the performance improvement? Assume a query takes 1s on a single node.
---
# Performance improvement

* 1 node: $n$ documents per index $\approx$ $m$ seconds per query
* 2 nodes: $\frac{n}{2}$ documents per index $\approx$ $\frac{m}{2}$ seconds per query
* …

$$\text{Distributed query time} \approx \frac{\text{Non-distributed query time}}{\text{Number of nodes}}$$<!--
.element: class="fragment" -->
---
# What's left to scale?

* More traffic
* Less downtimes

Notes:
How?
---
# Sharding

<p class="stretch">![sharding](../images/Sharding.svg)
    <!-- .element: style="border: none; box-shadow: none;" --></p>

Notes:
---
# Sharding nomenclature

## Shard <!-- .element: class="fragment" data-fragment-index="1" -->

* Slice of document collection <!-- .element: class="fragment" data-fragment-index="1" -->

## Master / Leader / Primary <!-- .element: class="fragment" data-fragment-index="2" -->

* Distribute requests to Replicas <!-- .element: class="fragment" data-fragment-index="2" -->
* Distribute requests to other Masters <!-- .element: class="fragment" data-fragment-index="2" -->

## Replica <!-- .element: class="fragment" data-fragment-index="3" -->

* Contains all documents of shard <!-- .element: class="fragment" data-fragment-index="3" -->
* Will actually handle queries <!-- .element: class="fragment" data-fragment-index="3" -->
* Can become Master <!-- .element: class="fragment" data-fragment-index="3" -->

Notes:
---
# More shards

* More docs
* Better query parallelization
    * A single query is faster
    * $\text{Shards} \times 2 \approx \text{Index} \div 2 \approx \text{Performance} \times 2$

Notes:
---
# More Replicas

* Better resiliency
* Better concurrency
    * More queries can be handled in parallel
    * $\text{Replicas} \times 2 \approx \text{Parallel queries} \times 2$

Notes:
