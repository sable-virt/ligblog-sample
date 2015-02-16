require('./style.css');
var html = require('./static.html');
document.body.innerHTML = html;

var img = new Image();
img.src = require('./image.png');

document.body.appendChild(img);