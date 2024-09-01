# Homework

## Implement spam filtering using naive bayes

Notes:
---

```
Enter text to classify, empty to quit: later friend
P(spam | "later friend"): 1.3958381774904292%
P(ham | "later friend"): 98.60416182250957%
"later friend" is not spam

Enter text to classify, empty to quit: free nokia mobile
P(spam | "free nokia mobile"): 99.990687845424%
P(ham | "free nokia mobile"): 0.009312154575997407%
"free nokia mobile" is spam

Enter text to classify, empty to quit:
```

<!-- .element: class="stretch" -->

Notes:
---

# Homework

* Build a Spam Classifier using Naive Bayes
* [Use the provided setup](https://gitlab.mediacube.at/information-retrieval/homework-naive_bayes), make sure to
  read [`README.md`](https://gitlab.mediacube.at/information-retrieval/homework-naive_bayes/-/blob/master/README.md)
* Use `data.txt` for training
* Implement the required probability calculation formulas
* Carefully think about what you can pre-calculate during start-up to save time when classifying
* Your application should be able to handle millions of texts
* **Focus on correct implementation of the required formulas**
* Use the provided CLI to manually test your application (see `README.md`)
* Ensure that the provided test cases run successfully (see `README.md`)

Notes:
