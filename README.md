# jekyll-reveal.js

A Jekyll-based framework for creating presentations based on Reveal.js and markdown.

## Introduction

If you like [Reveal.js][] for creating your online presentations, like the site
management [Jekyll][] gives you and like [Markdown][] because of its easy and clean look, here's an easy way to create a presentation using Jekyll, Markdown and Reveal.js.

See the [example presentation][] created using the contents in this repository and "jekyll build".

## Howto

First, [install Jekyll][]. After that, clone this repository and create a branch for your new presentation:

    git clone --recursive https://github.com/dploeger/jekyll-revealjs.git
    git checkout -b presentation1

Clean the Example presentation:

    git rm _posts/*
    mkdir _posts

After that, add your slides into the _posts-subdirectory in clean Markdown syntax and you're ready to go with building your presentation with Jekyll:

    jekyll build

You can even manage multiple presentations using the power of git. Simply branch from the master branch to create a new presentation:

    git checkout master
    git branch presentation2
    git checkout presentation2

## Slide filenames

Because we're using the Jekyll posts-framework to easily gather the slides for the presentation, we're bound to the conventions of Jekyll posts, namely being

    <year>-<month>-<day>-<title>.md

We recommend naming the files like

    0000-01-01-welcome.md
    0000-01-02-topics.md

and so forth.

Jekyll will assume, that each post has been made on the first of january, 2001 (which is of no interest for a presentation). The additional number is for sorting purposes. After that comes a title to identify the specific slide (which is actually only for the presentation author, Jekyll doesn't care about it).

## Configuring the presentation

You can configure almost any reveal.js setting using the _config.yml-settings file in the root directory.

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

## Markdown extensions and simplification

Reveal.js already includes a markdown interpreter, which we use for jekyll-reveal.js. We have already
configured it and included some simplification just for you!

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

### Speaker notes

jekyll-reveal.js is configured, so that speaker notes are identified after an introductory "Note:"-tag:

    # Slide

    Some slide content

    Note:

    This is only displayed in the speaker notes.

[Reveal.js]:      http://lab.hakim.se/reveal-js/#/
[Jekyll]:         http://jekyllrb.com/
[Markdown]:       http://daringfireball.net/projects/markdown/ 
[example presentation]: http://dploeger.github.io/jekyll-revealjs/example
[install Jekyll]: http://jekyllrb.com/docs/installation/  
[options]: https://github.com/hakimel/reveal.js#configuration
[depedencies]: https://github.com/hakimel/reveal.js#dependencies

