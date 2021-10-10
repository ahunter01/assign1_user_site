var Style = (function () {
    "use strict" ;

    var pub = {};

    pub.setup = function() {  

        $("body").scroll(function() {
            alert("yoo");
        });

    };

    return pub;

}());

if (window.addEventListener) {
window.addEventListener('load', Style.setup);
} else if (window.attachEvent) {
window.attachEvent('onload', Style.setup);
} else {
alert("Could not attach 'Style.setup' to the 'window.onload' event");
}