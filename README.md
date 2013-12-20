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

## Configuring the presentation

You can configure almost any reveal.js setting using the _config.yml-settings file in the
root directory.

* title: The title of your presentation (displayed in the browser's title bar)
* reveal_theme: The reveal.js-theme to use [default.css]
* reveal_transition: The reveal.js-transition to use [default]
* reveal_theme_path: The path to the reveal.js-theme (can be changed for custom themes) [reveal.js/css/theme/]
* reveal_notes_server: Wether to support the speaker notes server [false (only local speaker notes)]
* reveal_options: Additional reveal.js [options][]
* reveal_dependencies: Additional reveal.js [dependencies][]
* reveal_path: Path to the reveal.js-installation [reveal.js]

## Custom reveal.js-themes

If you want to use your custom reveal.js-theme, we recommend adding a directory "theme", putting the file(s)
there and referencing that directory in the configuration "reveal_theme_path".

Don't mess with the reveal.js subdirectory as it is a subrepository and doesn't adhere to your repository's
branches.

## Slide filenames

Because we're using the Jekyll post framework here, we're bound to the conventions
of Jekyll posts, namely being

    <year>-<month>-<day>-<title>.md

But everything should work well, if you just name the files

    1-1-1-1.md
    1-1-1-2.md

and so forth.

## Markdown extensions and simplification

### Multiple slides

To use multiple slides in one slide file, use a newline, three dashes and another newline like this:

    # Slide 1
    
    This is the content of Slide 1
    
    ---
    
    # Slide 2
    
    This is the content of Slide 2

### Vertical slides

To use vertical slides, do the same, but use two dashes:

    # Slide 1
    
    This is the content of Slide 1
    
    --
    
    And this is a vertical slide below Slide 1

### Fragments

Fragments allow slide elements to come one by one. This is often used in lists to subsequently show
fragments of a list during a presentation.

To use fragments, jekyll-reveal.js includes a jekyll-plugin, that simplifies the use of fragments
in markdown. To specify the current element as a fragment, use the {% fragment %}-tag like this:

    # Slide
    
    * This {% fragment %}
    * will {% fragment %}
    * come one by one {% fragment %}

### Slide backgrounds

To modify the background of the current slide, jekyll-reveal.js also includes a simplification
plugin:

    # Slide
    
    {% background white %}
    
    This slide has a white background

[Reveal.js]:      http://lab.hakim.se/reveal-js/#/
[Jekyll]:         http://jekyllrb.com/
[install Jekyll]: http://jekyllrb.com/docs/installation/  
[options]: https://github.com/hakimel/reveal.js#configuration
[depedencies]: https://github.com/hakimel/reveal.js#dependencies

