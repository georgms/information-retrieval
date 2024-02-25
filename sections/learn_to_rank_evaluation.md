# Result Evaluation

Notes:
---

# DCG

Discounted Cumulative Gain

$$DCG_p = \sum_{i=1}^{p} \frac{2^{rel_i}-1}{log_2(i+1)}$$

| $rel_i$ | $2^{rel_i}-1$ | $log_2(i+1)$ | $=$ |
|---------|---------------|--------------|-----|
| 2       | 3             | 1            | 3   |
| 3       | 7             | 1.6          | 4.4 |
| 1       | 1             | 2            | 0.5 |
| $\sum$  |               |              | 7.9 |

More results &rarr; higher DCG &rarr; normalize<!-- .element: class="fragment" data-fragment-index="" -->

Notes:
---

# iDCG

Ideal Discounted Cumulative Gain

$$iDCG_p = \sum_{i=1}^{|REL|} \frac{2^{rel_i}-1}{log_2(i+1)}$$

| $rel_i$ | $2^{rel_i}-1$ | $log_2(i+1)$ | $=$ |
|---------|---------------|--------------|-----|
| 3       | 7             | 1            | 7   |
| 2       | 3             | 1.6          | 1.9 |
| 1       | 1             | 2            | 0.5 |
| $\sum$  |               |              | 9.4 |

Notes:
---

# nDCG

Normalized Discounted Cumulative Gain

$$nDCG_p = \frac{DCG_p}{iDCG_p}$$

$$7.9 \div 9.4 = 0.8$$

Perfect ranking: $1.0$<!-- .element: class="fragment" data-fragment-index="" -->

Notes:
What's the perfect ranking?
---

# Online testing

A/B testing

Notes:
