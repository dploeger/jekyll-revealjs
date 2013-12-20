module Jekyll
    
    class RenderBackground < Liquid::Tag
    
        def initialize(tag_name, text, tokens)
            super
            @text = text
        end

        def render(context)
            "<!-- .slide: data-background=\"#{@text}\" -->"
        end

    end

end

Liquid::Template.register_tag('background', Jekyll::RenderBackground)
