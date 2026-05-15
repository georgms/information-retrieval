This repository contains the slides for an information retrieval lecture at a university targeted at information
technology students in their third year of their bachelor studies.

# Structure

* The slides are built with Reveal.js.
* Every `section_*.md` file contains one chapter.
* The [index.html](index.html) bundles all the slides into a single HTML file.
* The [index.html](index.html) also contains setup and plugins.

## Plugin integration

Plugins should run locally, which means that they should not be loaded from a CDN but instead be included in the
repository. This makes it possible to read the slides even without connectivity.

# Pedagogical approach

* The slides are designed to be interactive and engaging, with a focus on visual aids and practical examples.
* Each chapter is structured to build upon the previous one, ensuring a smooth learning curve.
* Typically, a topic starts with a problem statement / example so students can come up with solutions on their own.

## Audience questions

Slides should frequently contain audience questions where appropriate. These comprehension questions should be simple to
answer for students that have followed the lecture. The purpose of these questions is to keep students attentive and
engaged.

The slides should be structured as follows when including audience questions:

```markdown
<!-- .slide: class="audience-question" -->

Slide contents…

Notes:

* Question 1
* Question 2
```