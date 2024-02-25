# Naive Bayes Classification
---

# Basic Probability

Probability of A if B:

$$P(A | B)$$
---

# Basic Probability Examples

Probability of snow if winter:<!-- .element: class="fragment" -->

$$P(\text{snow in winter} | \text{winter}) = \frac{\text{Days with snow in winter}}{\text{Days in winter}} =
\frac{15}{90} =
16\%$$<!-- .element: class="fragment" -->

Probability of snow if summer:<!-- .element: class="fragment" -->

$$P(\text{snow in summer} | \text{summer}) = \frac{\text{Days with snow in summer}}{\text{Days in summer}} =
\frac{0}{90} =
0\%$$<!-- .element: class="fragment" -->

Probability of winter if it snows:<!-- .element: class="fragment" -->

$$P(\text{snow in winter} | \text{snow all year}) = \frac{\text{Days with snow in winter}}{\text{Days with snow all
year}} =
\frac{15}{17} =
88\%$$<!-- .element: class="fragment" -->

Notes:
Audience questions
---

# Basic Probability Examples

Probability that it will snow:<!-- .element: class="fragment" -->

$$P(\text{snow}) = \frac{\text{Days with snow per year}}{\text{Days in the year}} = \frac{17}{365} =
5\%$$<!-- .element: class="fragment" -->

Probability of winter:<!-- .element: class="fragment" -->

$$P(\text{winter}) = \frac{\text{Days in winter per year}}{\text{Days in the year}} = \frac{90}{365} =
25\%$$<!-- .element: class="fragment" -->

Notes:
Audience questions
---

# Bayes Theorem

$$\begin{aligned}
P(A | B) &= \frac{P(A) \times P(B | A)}{P(B)}\\\\
\\\\
P(\text{winter} | \text{snow}) &= \frac{P(\text{winter}) \times P(\text{snow} | \text{winter})}{P(\text{snow})}\\\\
\\\\
&= \frac{0.25 \times 0.16}{0.05} = 0.8\\\\
\\\\
&\approx \frac{\text{Days with snow in winter}}{\text{Days with snow all year}} = \frac{15}{17} = 0.88
\end{aligned}$$
---

# Bayes for text classification

Probability that documents belongs to $class$ if document contains
$term$:<!-- .element: class="fragment" data-fragment-index="1" -->

$$P(class | term)$$<!-- .element: class="fragment" data-fragment-index="1" -->

Probability of spam if mail contains $\text{viagra}$:<!-- .element: class="fragment" data-fragment-index="2" -->

$$P(\text{spam} | \text{viagra})$$<!-- .element: class="fragment" data-fragment-index="2" -->
---

# Example

[Interactive Bayes Classificator](https://docs.google.com/spreadsheets/d/1Cim4llHxSKF-meYq8qZEZmVU8OUPMDiBvFj4WCNPv34/edit?usp=sharing)<!-- .element: target="_blank" -->

Notes:
---

# Probability of Spam if document

*I have this document, is it Spam?*

(Using the extended form of Bayes theorem because spam / ham is a binary variable)

$$
P(\text{spam} | doc) &= \frac{P(\text{spam}) \times P(doc | \text{spam})}{P(\text{spam}) \times P(doc | \text{spam}) + P(\text{ham}) \times P(doc | \text{ham})}\\\\
\end{aligned}$$

Spam is one-of class membership so

$$P(\text{spam} | doc) + P(\text{ham} | doc) = 100\%$$
---

# Probability of Spam

*What percentage of all mails is Spam?*

$$P(\text{spam}) = \frac{\text{Number of spam mails}}{\text{Total number of mails}}$$<!-- .element: class="fragment" -->

<br />

$$P(\text{spam}) + P(\text{ham}) = 100\%$$<!-- .element: class="fragment" -->

Notes:
Audience question
---

# Probability of document if Spam

*Looking at Spam, what are the chances to see this document?*

<div>
\begin{aligned}
\\\\
P(doc | \text{spam}) &= \prod_{\text{term} \in \text{doc}} P(term | \text{spam}) = P(t_1 | \text{spam}) \times P(t_2 | \text{spam}) \times …
\end{aligned}
</div>
---
# Probability of term if Spam

*Looking at Spam, what are the chances to see this term?*

<div>
    \begin{aligned}
    \\\\
    P(term | \text{spam}) &= \frac{\text{Document frequency of }term\text{ in Spam}}{\text{Number of Spam mails}}
    \end{aligned}
</div>
Notes:
---
# Probability for unknown words

$P(\text{unknown spam word} | \text{spam}) = \frac{0}{\text{Number of Spam mails}} = 0$

so

$P(doc | \text{spam}) = P(\text{viagra} | \text{spam}) \times P(\text{unknown spam word} | \text{spam}) \times
\text{…} = 0$

But the probability should be $> 0%$.

Notes:
---

# Laplace Smoothing

<div>
    \begin{aligned}
    P(term | \text{spam}) &= \text{Probability of mail containing }term\text{ if it is Spam}\\\\
    &= \frac{\text{Document frequency of }term\text{ in Spam} + 1}{\text{Number of Spam mails} + 2}
    \end{aligned}
</div>

<br />

Constants are added so that $0\% < \text{probability} < 100\%$.

Notes:
---

# Probability of term

*What is the percentage of mails containing this term?*

$$P(term) = \frac{\text{Document frequency of }term + 1}{\text{Total number of mails} + 2}$$

Notes:
---

# Probability of spam if term

*I have this term, is it Spam?*

$$P(\text{spam} | term) = \frac{P(\text{spam}) \times P(term | \text{spam})}{P(\text{spam}) \times P(term |
\text{spam}) + P(\text{ham}) \times P(term | \text{ham})}$$

<br />

$$P(\text{spam} | term) + P(\text{ham} | term) = 100\%$$

Notes:
How to calculate these probabilities?
---

# Spam or Ham?

If $P(\text{spam} | content) > P(\text{ham} | content)$ then mail is spam, so:

$$\text{Spam}: \frac{P(\text{spam} | content)}{P(\text{ham} | content)} > 1$$

Notes:
---

# Naive Bayes

* Naive = Assumes features are independent
    * Features: ("rolex", "replica") are not independent
* Predicts probability for class, not class
* Robust to concept drift ("viagra" &rarr; "cialis")
* Robust to noise ("unusual" documents)
* Efficient and effective

Notes:

* Example for dependent features?
