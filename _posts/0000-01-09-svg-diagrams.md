# SVG Diagrams

<background>white</background>

You can use [mermaid-js](https://mermaid-js.github.io/mermaid/) to create SVG diagrams.

(enable the feature by setting `mermaid_diagrams` to `true` in `_config.yml`)

<!-- .element: style="font-size: 50%;" -->

<mermaid>
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
    D-->E
</mermaid>
<!-- .element: style="height: 250px;" -->

<!-- .element: style="font-size: 50%;" -->You can tweak the height of the diagram by following the closing tag with an [element attribute](https://revealjs.com/markdown/#element-attributes):  
`<!-- .element: style="height: 400px;" -->`
