define([
    "node_modules/marked/lib/marked"
], function(marked) {
    return {
        render: function(s) { return marked(s); }
    }
});