<!-- .slide: class="audience-question" -->

# Word Embeddings

![Word Embeddings](images/word_embeddings.png)

$$\text{king} - \text{man} + \text{woman} \approx \text{queen}$$

Notes:

* What does the equation suggest about the meaning stored in word vectors?
* Which word would you expect to be closest to `king - man + woman`?

---

<!-- .slide: class="audience-question" -->

# Word Embeddings

* Represent words with one-hot vectors
* Train neural network to predict next word
* Use large text corpus like Wikipedia

Similar vectors ≈ Related words ≈ Occur in similar contexts

Notes:

* Why do we need a large text corpus to train word embeddings?
* What should similar vectors tell us about two words?

---

<!-- .slide: class="audience-question" -->

# Words as vectors

* **Corpus**: *The quick brown fox jumps over the lazy dog.*
* **Vocabulary**: [brown, dog, fox, jump, lazy, quick].
* **Vector for** *brown* (one-hot encoding):

| Word  | Vector |
|-------|--------|
| brown | 1      |
| dog   | 0      |
| fox   | 0      |
| jump  | 0      |
| lazy  | 0      |
| quick | 0      |

<!-- .element: class="fragment" -->

Notes:

* What does the vector for *brown* look like?
* How many dimensions does this one-hot vector have?

---

<!-- .slide: class="audience-question" -->

# Train similarity

<div>
    \begin{aligned}
    sim(\text{quick}, \text{brown}) &> sim(\text{quick}, \text{dog})\\\\
    sim(\begin{pmatrix}1 \\\\ 0 \\\\ 0 \\\\ 0 \\\\ 0 \\\\ 0\end{pmatrix}, \begin{pmatrix}0 \\\\ 1 \\\\ 0 \\\\ 0 \\\\ 0 \\\\ 0\end{pmatrix}) &> sim(\begin{pmatrix}1 \\\\ 0 \\\\ 0 \\\\ 0 \\\\ 0 \\\\ 0\end{pmatrix}, \begin{pmatrix}0 \\\\ 0 \\\\ 0 \\\\ 0 \\\\ 0 \\\\ 1\end{pmatrix})
    \end{aligned}
</div>

Notes:

* In one-hot encoding, are *quick* and *brown* automatically more similar than *quick* and *dog*?
* What do we need to train so that related words get closer vectors?

---

<!-- .slide: class="audience-question" -->

# Training data

*The quick brown fox jumps over the lazy dog.*

Slide window over corpus:

1. &shy;<!-- .element: class="fragment" data-fragment-index="1" -->
   *<span class="fragment highlight-blue" data-fragment-index="1">The quick</span> brown fox jumps over the lazy dog*
    * [*the* &rarr; *quick*]
2. &shy;<!-- .element: class="fragment" --> *The <span class="fragment highlight-blue" data-fragment-index="1">quick
   brown</span> fox jumps over the lazy dog*
    * [*quick* &rarr; *brown*]
3. &shy;<!-- .element: class="fragment" --> *The quick <span class="fragment highlight-blue" data-fragment-index="1">
   brown fox</span> jumps over the lazy dog*
    * [*brown* &rarr; *fox*]

&shy;<!-- .element: class="fragment" -->When machine sees *brown* it should predict *fox*.

Notes:

* What input-output pair do we get from the phrase *brown fox*?
* What changes when we slide the window one word to the right?

---

<!-- .slide: class="audience-question" -->

# Skipgram

Predict context from word.

1. *<span class="highlight-blue">The <u>quick</u> brown</span> brown fox jumps over the lazy dog*: [*quick* &rarr;
   *the*,
   *brown*]
2. *The <span class="highlight-blue">quick <u>brown</u> fox</span> jumps over the lazy dog*: [*brown* &rarr; *quick*,
   *fox*]
3. *The quick <span class="highlight-blue">brown <u>fox</u> jumps</span> over the lazy dog*: [*fox* &rarr; *brown*,
   *jumps*]

When machine sees *quick* it should predict *the* or *brown*.

Window can be larger (recommended: 5).

Skipgram well suited for small data sets with rare words.

Notes:

* In skipgram, do we predict the center word or its surrounding context?
* Why can a larger window give the model broader context?
* When is skipgram especially useful?

---

<!-- .slide: class="audience-question" -->

# Continuous Bag of Words (CBOW)

Predict word from context.

1. *<span class="highlight-blue"><u>The</u> quick <u>brown</u></span> brown fox jumps over the lazy dog*: [*the*,
   *brown* &rarr; *quick*]
2. *The <span class="highlight-blue"><u>quick</u> brown <u>fox</u></span> jumps over the lazy dog*: [*quick*,
   *fox* &rarr;
   *brown*]
3. *The quick <span class="highlight-blue"><u>brown</u> fox <u>jumps</u></span> over the lazy dog*: [*brown*,
   *jumps* &rarr; *fox*]

When machine sees *the* or *brown* it should predict *quick*.

CBOW trains faster, more accurate for frequent words.

Notes:

* In CBOW, do we predict the center word or the surrounding context?
* What is the main difference between CBOW and skipgram?
* For which words is CBOW often more accurate?

---

<!-- .slide: class="audience-question" -->

# Word Embedding visualized

[Word Embedding Visual Inspector](https://ronxin.github.io/wevi/)

Notes:

* What would you expect to happen to words that appear in similar contexts during training?
* In a visualization, what does it mean if two words are close together?

---

# Word Embedding play time

[View Word Embedding Notebook](https://github.com/georgms/information-retrieval/blob/gh-pages/word-embedding/Word_Embedding.ipynb)

1. Download [Word Embedding Notebook](word-embedding/Word_Embedding.ipynb)
   and [simple-wikipedia.zip](https://gitlab.ct.fh-salzburg.ac.at/information-retrieval/homework/tf-idf-scoring/-/blob/main/simple-wikipedia.zip?ref_type=heads)
2. `unzip -q simple-wikipedia.zip`
3. Run Jupyter:

```shell
docker run -p 8888:8888 -e GRANT_SUDO=yes -u root -v "$PWD:/home/jovyan/work" jupyterhub/singleuser
```

4. Open http://localhost:8888/lab with the token from the console

Notes:

---

<!-- .slide: class="audience-question" -->

# Word2Vec Alternatives

[GloVe](https://nlp.stanford.edu/projects/glove/)

* More suitable for document-level tasks
* E.g. document-document similarity, topic modeling.
* Pre-trained for many languages

[fastText](https://fasttext.cc/)

* Uses n-grams instead of words
* Can match unknown words by matching n-grams
* Can also be used for text classification
* Pre-trained for many languages

Notes:

* Which alternative can still represent unknown words using n-grams?
* Which alternative is described as more suitable for document-level tasks?
