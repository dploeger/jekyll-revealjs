module Jekyll
    
    class RenderFragment < Liquid::Tag
    
        def render(context)
            "<!-- .element: class=\"fragment\" -->"
        end

    end

end

Liquid::Template.register_tag('fragment', Jekyll::RenderFragment)
