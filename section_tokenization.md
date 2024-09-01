# Tokenization

Notes:
---

# Tokenization

> a book about information retrieval <!-- .element: class="fragment" data-fragment-index="1" -->

&darr; <!-- .element: class="fragment" data-fragment-index="2" -->

`[a, book, about, information, retrieval]` <!-- .element: class="fragment" data-fragment-index="2" -->

> "Information Retrieval": Also available as e-book! <!-- .element: class="fragment" data-fragment-index="3" -->

&darr; <!-- .element: class="fragment" data-fragment-index="4" -->

`[Information Retrieval]? [Information, Retrieval]?` <!-- .element: class="fragment" data-fragment-index="4" -->

`[e-book]? [eBook]? [e, book]?` <!-- .element: class="fragment" data-fragment-index="4" -->

Notes:
---

# Challenge

Inverted index can only find exact tokens

| Term        | Doc IDs    |
|-------------|------------|
| book        | #1, #2, #3 |
| information | #1, #2, #3 |
| retrieval   | #1         |
| search      | #2         |

_e-book_ will return no results!

Notes:
---

<!-- .slide: class="audience-question" -->

# Challenge

* How can _books_ find _book_?
* _wi-fi_ &leftrightarrow; _wifi_?
* &shy;<!-- .element: class="fragment" --> _Jack's_ &leftrightarrow; _Jack_?
* &shy;<!-- .element: class="fragment" --> _MMT_ &leftrightarrow; _Multimediatechnology_?
* &shy;<!-- .element: class="fragment" --> _U.S.A._ &leftrightarrow; _USA_?
* &shy;<!-- .element: class="fragment" --> _running_ &leftrightarrow; _run_?

Notes:
What are other examples?
---

# Text analysis

* Analyze docs and query
* Add, remove, change terms

Notes:
---

# Nomenclature

<dl>
    <dt>Token</dt><!-- .element: class="fragment" data-fragment-index="1" -->
    <dd>
        <ul>
            <li>Character sequence, meaningful semantic unit</li>
            <li>No analysis yet</li>
            <li><em>the</em>, <em>routers</em>, <em>the</em></li>
        </ul>
    </dd><!-- .element: class="fragment" data-fragment-index="1" -->
    <dt>Type</dt><!-- .element: class="fragment" data-fragment-index="2" -->
    <dd>
        <ul>
            <li>Distinct tokens, same token counts only once</li>
            <li><em>the</em>, <em>routers</em></li>
        </ul>
    </dd><!-- .element: class="fragment" data-fragment-index="2" -->
    <dt>Terms</dt><!-- .element: class="fragment" data-fragment-index="3" -->
    <dd>
        <ul>
            <li>Index tokens</li>
            <li><em>router</em></li>
        </ul>
    </dd><!-- .element: class="fragment" data-fragment-index="3" -->
</dl>
