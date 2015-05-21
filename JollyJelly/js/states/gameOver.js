(function () {
    "use strict";

    var ready = function (element, options) {
        WinJS.UI.processAll(element)
            .done(function () {
                
            });
    };

    function resumeHandler() {
        game.resume();
    }

    WinJS.UI.Pages.define("/pages/gameOver.html", {
        ready: ready,
        unload: function () {
        },

        updateLayout: function (element) {
        }

    });

})();