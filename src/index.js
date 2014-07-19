define([
    "src/markdown"
], function(markdown) {
    var commands = codebox.require("core/commands");
    var dialogs = codebox.require("utils/dialogs");

    commands.register({
        id: "markdown.preview",
        title: "Markdown: Preview",
        context: ["editor"],
        run: function(args, context) {
            return codebox.tabs.add(codebox.tabs.HtmlPanel, {
                className: "component-markdown-preview",
                content: markdown.render(context.getContent())
            }, {
                type: "markdown",
                title: "Markdown: " + context.model.get("name"),
                section: "markdown"
            });
        }
    });
});