require("./stylesheets/main.less");
var marked = require("marked");

var commands = codebox.require("core/commands");
var dialogs = codebox.require("utils/dialogs");

commands.register({
    id: "markdown.preview",
    title: "Markdown: Preview",
    context: ["editor"],
    run: function(args, ctx) {
        return codebox.tabs.add(codebox.tabs.HtmlPanel, {
            className: "component-markdown-preview",
            content: marked(ctx.editor.getContent())
        }, {
            type: "markdown",
            title: "Markdown: " + ctx.editor.model.get("name"),
            section: "markdown"
        });
    }
});
