# Tokenization Example

Notes:
---
<table class="stretch">
    <tr>
        <th style="border-right: 1px solid rgb(34, 34, 34);"></th>
        <th colspan="7" style="border-right: 1px solid rgb(34, 34, 34);">Index</th>
        <th colspan="2">Query</th>
    </tr>
    <tr>
        <td style="border-right: 1px solid rgb(34, 34, 34);"></td>
        <td colspan="7" style="border-right: 1px solid rgb(34, 34, 34);"><span class="fragment"
                                                                               data-fragment-index="1">A Wi-Fi Router</span>
        </td>
        <td colspan="2"><span class="fragment" data-fragment-index="1">wireless routers</span></td>
    </tr>
    <tr>
        <td style="border-right: 1px solid rgb(34, 34, 34);">Tokenization</td>
        <td><span class="fragment" data-fragment-index="2">A</span></td>
        <td><span class="fragment" data-fragment-index="2">Wi-Fi</span></td>
        <td colspan="5" style="border-right: 1px solid rgb(34, 34, 34);"><span class="fragment"
                                                                               data-fragment-index="2">Router</span>
        </td>
        <td><span class="fragment" data-fragment-index="9">wireless</span></td>
        <td><span class="fragment" data-fragment-index="9">routers</span></td>
    </tr>
    <tr>
        <td style="border-right: 1px solid rgb(34, 34, 34);">Lowercasing</td>
        <td><span class="fragment" data-fragment-index="4">a</span></td>
        <td><span class="fragment" data-fragment-index="4">wi-fi</span></td>
        <td colspan="5" style="border-right: 1px solid rgb(34, 34, 34);"><span class="fragment" data-fragment-index="4">router</span>
        </td>
        <td><span class="fragment" data-fragment-index="10">wireless</span></td>
        <td><span class="fragment" data-fragment-index="10">routers</span></td>
    </tr>
    <tr>
        <td style="border-right: 1px solid rgb(34, 34, 34);">Stop words</td>
        <td></td>
        <td><span class="fragment" data-fragment-index="5">wi-fi</span></td>
        <td colspan="5" style="border-right: 1px solid rgb(34, 34, 34);"><span class="fragment" data-fragment-index="5">router</span>
        </td>
        <td><span class="fragment" data-fragment-index="11">wireless</span></td>
        <td><span class="fragment" data-fragment-index="11">routers</span></td>
    </tr>
    <tr>
        <td style="border-right: 1px solid rgb(34, 34, 34);">Word delimiter<br>(Index only)</td>
        <td></td>
        <td><span class="fragment" data-fragment-index="6">wi-fi</span></td>
        <td><span class="fragment" data-fragment-index="6">wi</span></td>
        <td><span class="fragment" data-fragment-index="6">fi</span></td>
        <td><span class="fragment" data-fragment-index="6">wifi</span></td>
        <td colspan="2" style="border-right: 1px solid rgb(34, 34, 34);"><span class="fragment" data-fragment-index="6">router</span>
        </td>
        <td><span class="fragment" data-fragment-index="12">wireless</span></td>
        <td><span class="fragment" data-fragment-index="12">routers</span></td>
    </tr>
    <tr>
        <td style="border-right: 1px solid rgb(34, 34, 34);">Stemming</td>
        <td></td>
        <td><span class="fragment" data-fragment-index="7">wi-fi</span></td>
        <td><span class="fragment" data-fragment-index="7">wi</span></td>
        <td><span class="fragment" data-fragment-index="7">fi</span></td>
        <td><span class="fragment" data-fragment-index="7">wifi</span></td>
        <td colspan="2" style="border-right: 1px solid rgb(34, 34, 34);"><span class="fragment" data-fragment-index="7">router</span>
        </td>
        <td><span class="fragment" data-fragment-index="13">wireless</span></td>
        <td><span class="fragment" data-fragment-index="13">router</span></td>
    </tr>
    <tr>
        <td style="border-right: 1px solid rgb(34, 34, 34);">Synonyms<br>wifi &rarr; wireless<br>(Index
            only)
        </td>
        <td></td>
        <td><span class="fragment" data-fragment-index="8">wi-fi</span></td>
        <td><span class="fragment" data-fragment-index="8">wi</span></td>
        <td><span class="fragment" data-fragment-index="8">fi</span></td>
        <td><span class="fragment" data-fragment-index="8">wifi</span></td>
        <td><span class="fragment" data-fragment-index="8">
            <span class="fragment highlight-blue" data-fragment-index="15">wireless</span>
        </span></td>
        <td style="border-right: 1px solid rgb(34, 34, 34);"><span class="fragment" data-fragment-index="8">
            <span class="fragment highlight-blue" data-fragment-index="15">router</span>
        </span></td>
        <td><span class="fragment" data-fragment-index="14">
            <span class="fragment highlight-blue" data-fragment-index="15">wireless</span>
        </span></td>
        <td><span class="fragment" data-fragment-index="14">
            <span class="fragment highlight-blue" data-fragment-index="15">router</span>
        </span></td>
    </tr>
</table>

Notes:
Will increase relevance, but reduce precision
---
![analysis](images/analysis.png)

Notes:
---

# Outcome

* &shy;<!-- .element: class="fragment" --> Find more results: _wireless_ &rarr; _wi-fi_
* &shy;<!-- .element: class="fragment" --> Find more imprecise results: _wi-fi_ &rarr; _wireless_
* &shy;<!-- .element: class="fragment" --> Miss some results: _to be or not to be_

Notes:

* Will this find more results?
* Will this find less accurate results?
