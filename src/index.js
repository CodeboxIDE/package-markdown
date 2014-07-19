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

        }
    });
});