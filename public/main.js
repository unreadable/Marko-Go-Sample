const counter = require('./counter.marko');
 
counter.renderSync({}).appendTo(document.body);