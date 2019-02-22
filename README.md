# jekyll-reveal.js

A Jekyll-based framework for creating presentations based on Reveal.js and Markdown.

- [Introduction](#introduction)
- [Howto](#howto)
- [Slide filenames](#slide-filenames)
- [Configuring the presentation](#configuring-the-presentation)
  - [Specifying reveal options and dependencies](#specifying-reveal-options-and-dependencies)
- [Custom reveal.js themes](#custom-revealjs-themes)
- [Markdown extensions and simplification](#markdown-extensions-and-simplification)
  - [Multiple slides](#multiple-slides)
  - [Vertical slides](#vertical-slides)
  - [Fragments](#fragments)
  - [Slide backgrounds](#slide-backgrounds)
  - [Speaker notes](#speaker-notes)

## Introduction

If you like [Reveal.js][] for creating your online presentations, like the site management [Jekyll][] gives you and like [Markdown][] because of its easy and clean look, here's an easy way to create a presentation using Jekyll, Markdown and Reveal.js.

See the [example presentation][] created using the contents in this repository and `jekyll build` or `docker-compose up`.

## Howto

First, [install Jekyll][]. After that, clone this repository and create a branch for your new presentation:

    git clone --recursive https://github.com/dploeger/jekyll-revealjs.git
    git checkout -b presentation1

Clean the Example presentation:

    git rm _posts/*
    mkdir _posts

After that, add your slides into the `_posts` subdirectory in clean Markdown syntax and you're ready to build your presentation with Jekyll:

    jekyll build

If you don’t have Jekyll installed (but you do have Docker) then you can just run the following to build and serve your changes using a container. Hit `ctrl-c` to stop the process.

     docker-compose up

You can even manage multiple presentations using the power of Git. Simply branch from the master branch to create a new presentation:

    git checkout master
    git branch presentation2
    git checkout presentation2

## Slide filenames

Because we're using Jekyll [posts][] to easily gather the slides for the presentation, we use their filename conventions with the following syntax:

    <year>-<month>-<day>-<title>.md

We recommend naming the files like

    0000-01-01-welcome.md
    0000-01-02-topics.md

and so forth.

Jekyll will assume that each post has been made on the first of January, 2001 (which is of no interest for a presentation). The additional number is for sorting purposes. After that comes a title to identify the specific slide (which is actually only for the presentation author, Jekyll doesn't care about it).

## Configuring the presentation

You can configure almost any reveal.js setting using the `_config.yml` settings file in the root directory.

- `title`: The title of your presentation (displayed in the browser's title bar, optional and defaults to your repository’s name thanks to the `jekyll-github-metadata` plugin)
- `description`: A description for your presentation (displayed in the HTML head, optional and defaults to your repository’s description thanks to the `jekyll-github-metadata` plugin)
- `author`: Your name (displayed in the HTML head)
- `reveal_theme`: The reveal.js-theme to use [default.css]
- `reveal_transition`: The reveal.js-transition to use [default]
- `reveal_theme_path`: The path to the reveal.js-theme (can be changed for custom themes) [reveal.js/css/theme/]
- `reveal_notes_server`: Whether to support the speaker notes server [false (only local speaker notes)]
- `reveal_options`: Additional reveal.js [options][]

- `reveal_dependencies`: Additional reveal.js [dependencies][]
- `reveal_path`: Path to the reveal.js-installation [reveal.js]

You can also further customize the presentation:

- `extra_css`: Additional CSS files added after the reveal [theme][]
- `highlight_style_sheet`: CSS theme for highlight.js [reveal.js/lib/css/zenburn.css](reveal.js/lib/css/zenburn.css)

### Specifying reveal options and dependencies

`reveal_options` can be either a list of strings specifying the JavaScript options, e.g.:

```yaml
reveal_options:
  - 'width: "960px"'
  - 'height: "720px"'
```

or, as a convenience, it can be a mapping of options to their values:

```yaml
reveal_options:
  width: 960px
  height: 720px
```

Note that if a mapping is passed, the values will be inserted into the final JavaScript as quoted strings. If this is unacceptable (for example, if you want to pass a Boolean parameter that takes `true` or `false`), specify a list of strings.

`reveal_dependencies` takes a list of strings representing the JavaScript to specify a dependency [as you would in reveal.js](https://github.com/hakimel/reveal.js/#dependencies), for example:

```yaml
reveal_dependencies:
  # Speaker notes
  - "{ src: 'path/to/plugin.js', async: true },"
```

## Custom reveal.js themes

If you want to use your custom reveal.js theme, we recommend adding a directory `theme`, putting the file(s) there and referencing that directory in the configuration `reveal_theme_path`.

Don't mess with the `reveal.js` subdirectory as it is a submodule and doesn't adhere to your repository's branches.

## Markdown extensions and simplification

Reveal.js already includes a Markdown interpreter, which we use for **jekyll-reveal.js**. We have already configured it and included some simplification just for you!

### Multiple slides

To use multiple slides in one slide file, use a newline, three dashes and another newline like this:

```markdown
# Slide 1

This is the content of Slide 1

---

# Slide 2

This is the content of Slide 2
```

### Vertical slides

To use vertical slides, do the same, but use two dashes:

```markdown
# Slide 1

This is the content of Slide 1

--

And this is a vertical slide below Slide 1
```

### Fragments

Fragments allow slide elements to come one by one. This is often used in lists to subsequently show fragments of a list during a presentation.

**jekyll-reveal.js** simplifies the reveal.js syntax. To specify the current element as a fragment, use `<fragment/>` like this:

```markdown
# Slide

- This <fragment/>
- will <fragment/>
- come one by one <fragment/>
```

Or, if you find it cleaner, like this:

```markdown
# Slide

+ This
+ will
+ come one by one
```

### Slide backgrounds

To modify the background of the current slide, **jekyll-reveal.js** simplifies the syntax to `<background>color</background>`:

```markdown
# Slide

<background>white</background>

This slide has a white background
```

#### Image backgrounds

You can also set image backgrounds:

```markdown

# Slide

<backgroundimage>{{ site.github.url }}/images/image.jpg</backgroundimage>
<backgroundimageopacity>0.25</backgroundimageopacity>

This slide has an image background

```

Note: `{{ site.github.url }}` expands to the URL of your hosted site, but you could also use remote URLs.

### Speaker notes

To include speaker notes, add `Note:` on a separate line and write your notes below:

```markdown
# Slide

Some slide content

Note:

This is only displayed in the speaker notes.
```

[reveal.js]: http://lab.hakim.se/reveal-js/#/
[jekyll]: http://jekyllrb.com/
[markdown]: http://daringfireball.net/projects/markdown/
[example presentation]: http://dploeger.github.io/jekyll-revealjs/example
[install jekyll]: http://jekyllrb.com/docs/installation/
[options]: https://github.com/hakimel/reveal.js#configuration
[dependencies]: https://github.com/hakimel/reveal.js#dependencies
[posts]: https://jekyllrb.com/docs/posts/#creating-posts
[theme]: https://github.com/hakimel/reveal.js#theming
