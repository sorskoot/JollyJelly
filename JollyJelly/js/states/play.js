(function (window) {
    "use strict";
    var mql;

    var ready = function (element, options) {
        WinJS.UI.processAll(element)
            .done(function () {
                var game = new JollyJelly.game(options);
                //game.init({ size: game.mode });
                //$("#resumeButton").addEventListener("click", resumeHandler);
                //$("#completeLayer").addEventListener("click", function () {
                //    WinJS.Navigation.back();
                //});
                //window.attachButtonAnimations();
            });
    };

    function resumeHandler() {
        game.resume();
    }

    WinJS.UI.Pages.define("/pages/play.html", {
        ready: ready,
        unload: function () {
        },

        updateLayout: function (element) {
        }

    });

})(window);