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
    git branch presentation1
    git checkout presentation1

Clean the Example presentation:

    git rm _posts/*
    mkdir _posts

After that, add your slides into the _posts-subdirectory in clean Markdown syntax
and you're ready to go with building your presentation with Jekyll:

    jekyll build

You can even manage multiple presentations using the power of git. Simple branch from the
master branch to create a new presentation:

    git checkout master
    git branch presentation2
    git checkout presentation2

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

## Markdown extensions

Jekyll-Revealjs implements the following extensions:

To use multiple slides in one slide file, use a newline, three dashes and another newline like this:

    # Slide 1
    
    This is the content of Slide 1
    
    ---
    
    # Slide 2
    
    This is the content of Slide 2

To use vertical slides, do the same, but use two dashes:

    # Slide 1
    
    This is the content of Slide 1
    
    --
    
    And this is a vertical slide below Slide 1

To use fragments, you can use the features also described in the Reveal.js-documentation:

    # Slide
    
    * This <!-- .element: class="fragment" -->
    * will <!-- .element: class="fragment" -->
    * come one by one <!-- .element: class="fragment" -->

Use the same technique to set slide backgrounds:

    # Slide
    
    <!-- .slide: data-background="#ffffff" -->
    
    This slide has a white background
