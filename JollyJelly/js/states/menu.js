(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/menu.html", {
        ready: function (element, options) {

            
            $("#startGame").addEventListener("click", function () {
                options.play();
            });
        }
    });
})();