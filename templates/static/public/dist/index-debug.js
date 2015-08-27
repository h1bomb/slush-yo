define("demo/index", ["jquery/jquery"], function(require, exports, module){
var demo;

require("demo/js/default");
module.exports = demo;
});
define("demo/js/default", ["jquery/jquery"], function(require, exports, module){
/**
 * index demo
 */

var $ = require("jquery/jquery");

$('body h1').css('color','#eee');
});
