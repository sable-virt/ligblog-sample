require.ensure([],function(sub) {
    var sub = require('./sub');
    sub('test');
});