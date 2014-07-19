define([
    "node_modules/marked/marked.min"
], function(marked) {
    console.log(marked);

    return {
        render: function(s) { return marked(s); }
    }
});