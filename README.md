# Jekyll & Reveal.js

A Jekyll-Site for creating presentations based on Reveal.js

## Introduction

If you like [Reveal.js][] for creating your online presentations and like the site
management [Jekyll][] gives you, here's an easy way to create a presentation using
Jekyll and Reveal.js

## Howto

First, [install Jekyll][]. After that, clone this repository and create a branch
for your new presentation:

    git clone --recursive https://github.com/dploeger/jekyll-revealjs.git
    git checkout presentation1

Clean the Example presentation:

    git rm _posts/*
    mkdir _posts

After that, add your slides into the _posts-subdirectory in clean Markdown syntax
and you're ready to go with building your presentation with Jekyll:

    jekyll build

## Slide filenames

Because we're using the Jekyll post framework here, we're bound to the conventions
of Jekyll posts, namely being

    <year>-<month>-<day>-<title>.md

But everything should work well, if you just name the files

    1-1-1-1.md
    1-1-1-2.md

and so forth.

[Reveal.js]:      http://lab.hakim.se/reveal-js/#/
[Jekyll]:         http://jekyllrb.com/
[install Jekyll]: http://jekyllrb.com/docs/installation/  
