# Fuzzy search

Is _bock_ most similar to _book_, _rock_ or _spock_?

Notes:
---
\#1: `book`, \#2: `rock`, \#3: `spock`

<table>
    <thead>
    <tr>
        <th>Term</th>
        <th>Doc IDs</th>
    </tr>
    </thead>
    <tbody class="fragment">
    <tr>
        <td>^bo</td>
        <td>#1</td>
    </tr>
    <tr>
        <td>boo</td>
        <td>#1</td>
    </tr>
    <tr>
        <td>ook</td>
        <td>#1</td>
    </tr>
    <tr>
        <td>ok^</td>
        <td>#1</td>
    </tr>
    <tr>
        <td>^ro</td>
        <td>#2</td>
    </tr>
    <tr>
        <td>roc</td>
        <td>#2</td>
    </tr>
    <tr>
        <td>^sp</td>
        <td>#3</td>
    </tr>
    <tr>
        <td>spo</td>
        <td>#3</td>
    </tr>
    <tr>
        <td>poc</td>
        <td>#3</td>
    </tr>
    <tr>
        <td>ock</td>
        <td>#2 ,#3</td>
    </tr>
    <tr>
        <td>ck^</td>
        <td>#2, #3</td>
    </tr>
    </tbody>
</table>

Notes:
Audience question: What does the index look like?
---
`bock`

&darr;

`^bo OR boc OR ock OR ck^`

&darr;

| Term                                       | Doc IDs                                        |
|--------------------------------------------|------------------------------------------------|
| ^bo<!-- .element: class="highlight-blue" --> | #1<!-- .element: class="highlight-blue" -->      |
| boo                                        | #1                                             |
|                                            | …                                              |
| poc                                        | #3                                             |
| ock<!-- .element: class="highlight-blue" --> | <!-- .element: class="highlight-blue" --> #2 ,#3 |
| ck^<!-- .element: class="highlight-blue" --> | <!-- .element: class="highlight-blue" --> #2, #3 |

Notes:
Which document is the best match?
---
| Term                                       | Doc IDs                                        |
|--------------------------------------------|------------------------------------------------|
| ^bo<!-- .element: class="highlight-blue" --> | #1<!-- .element: class="highlight-blue" -->      |
| boo                                        | #1                                             |
|                                            | …                                              |
| poc                                        | #3                                             |
| ock<!-- .element: class="highlight-blue" --> | <!-- .element: class="highlight-blue" --> #2 ,#3 |
| ck^<!-- .element: class="highlight-blue" --> | <!-- .element: class="highlight-blue" --> #2, #3 |

&darr;

* \#1: [<span>^bo</span><!-- .element: class="highlight-blue" -->, boo, ook, ok^] &rarr; 25%
* \#2: [^ro, roc, <span>ock</span><!-- .element: class="highlight-blue" -->, <span>ck^</span><!-- .element: class="highlight-blue" -->] &rarr; 50%
* \#3: [^sp, spo, poc, <span>ock</span><!-- .element: class="highlight-blue" -->, <span>ck^</span><!-- .element: class="highlight-blue" -->] &rarr; 40%

Notes:
