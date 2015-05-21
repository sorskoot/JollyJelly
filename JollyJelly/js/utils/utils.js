(function (global) {
    "use strict";

    global.$ = function (selector) {
        return document.querySelector(selector);
    }

    Math.intersects = function (cx, cy, radius, left, top, right, bottom) {
        var closestX = (cx < left ? left : (cx > right ? right : cx));
        var closestY = (cy < top ? top : (cy > bottom ? bottom : cy));
        var dx = closestX - cx;
        var dy = closestY - cy;

        return (dx * dx + dy * dy) <= radius * radius;
    }

})(window);