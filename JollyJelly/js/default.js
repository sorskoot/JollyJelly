// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=329104
(function () {
    "use strict";

    var activation = Windows.ApplicationModel.Activation;
    var app = WinJS.Application;
    var nav = WinJS.Navigation;
    var ui = WinJS.UI;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {

            // Optimize the load of the application and while the splash screen is shown, execute high priority scheduled work.
            ui.disableAnimations();
            var p = ui.processAll().then(function () {
                return new JollyJelly.app().initialize();
                // return nav.navigate(nav.location || JollyJelly.navigator.home, nav.state);
            }).then(function () {
                ui.enableAnimations();
            });

            //args.setPromise(WinJS.UI.processAll().then(function(){
            //    var game = new JollyJelly.game();
            //}));
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
