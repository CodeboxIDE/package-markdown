define([
    "node_modules/marked/lib/marked"
], function(marked) {
    console.log(marked);

    return {
        render: function(s) { return marked(s); }
    }
});