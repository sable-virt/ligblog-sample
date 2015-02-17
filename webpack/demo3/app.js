window.setTimeout(function() {
    require.ensure([],function(sub) {
        var sub = require('./sub');
        sub('test');
    });
},3000);
