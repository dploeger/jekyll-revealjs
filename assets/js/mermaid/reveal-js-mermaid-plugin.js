// Source: https://github.com/ludwick/reveal.js-mermaid-plugin

(function(){

  function fixUpSvgSize(divElem, svgElem) {
    var width = svgElem.getBoundingClientRect().width;
    var height = svgElem.getBoundingClientRect().height;
    var divWidth = divElem.offsetWidth;
    var divHeight = divElem.offsetHeight;

    if (width > divWidth || height > divHeight) {
      var viewBox = '0 0 ' + width + ' ' + height;
      svgElem.setAttribute('viewBox', viewBox);
      svgElem.setAttribute('width', divElem.offsetWidth);
      svgElem.setAttribute('height', divElem.offsetHeight);
    }
  }

  function getDataElem(slide) {
    var children = slide.getElementsByClassName('diagram-data');
    var spans = Array.prototype.filter.call(children, function(element) {
      return element.nodeName === 'SPAN';
    });

    return spans[0];
  }

  function getDisplayDiv(slide) {
    var children = slide.getElementsByClassName('diagram-display');
    var divs = Array.prototype.filter.call(children, function(element) {
      return element.nodeName === 'DIV';
    });

    return divs[0];
  }

  function isDiagramSlide(slide) {
    return slide.classList.contains("diagram-slide");
  }

  function destroyDiagram(slide) {
    if (!isDiagramSlide(slide)) { return; }

    var svgDiv = getDisplayDiv(slide);
    while (svgDiv.firstChild) {
      svgDiv.removeChild(svgDiv.firstChild);
    }
    svgDiv.removeAttribute("data-processed");
  }

  function showDiagram(slide) {
    
    if (!isDiagramSlide(slide)) { return; }

    var dataElem = getDataElem(slide);
    var svgDiv = getDisplayDiv(slide);

    svgDiv.innerHTML = `${dataElem.getAttribute('data-mermaid-config')}\n${dataElem.getElementsByTagName('code')[0].innerHTML}`;

    mermaid.flowchartConfig
    var config = {};
    mermaid.init(config, svgDiv);

    // Fix up svg element size
    var svgElem = svgDiv.getElementsByTagName("svg")[0]; 
    if (svgElem) {
      fixUpSvgSize(svgDiv, svgElem);
    }
    
  }

  Reveal.addEventListener( 'slidechanged', function( event ) {
    if (event.previousSlide) {
      destroyDiagram(event.previousSlide);
    }

    if (event.currentSlide) {
      showDiagram(event.currentSlide);
    }
  });

  Reveal.addEventListener('overviewhidden', function (event) {
      if (event.currentSlide) {
          destroyDiagram(event.currentSlide);
          showDiagram(event.currentSlide);
      }
  });
}());
