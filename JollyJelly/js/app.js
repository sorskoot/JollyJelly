(function iffeApp() {
    "use strict";

    WinJS.Namespace.define("JollyJelly", {
        app: WinJS.Class.define(null,
            {
                initialize: function () {
                    //initialize canvas and stage 
                    //this.stage = new createjs.Stage("demoCanvas");
                    //createjs.Touch.enable(this.stage);
                    var self = this;
                    this.spriteSheet = {};

                    this.preload()
                        .then(function (spritesheet) {
                            self.spriteSheet = spritesheet;
                        }).done(function () {
                            self.menu();
                        });

                },

                preload: function () {
                    return new WinJS.Promise(function (done) {
                        WinJS.Navigation.navigate("/pages/preloader.html",
                              {
                                  onComplete: function (data) {
                                      done(data);
                                  }
                              });
                    });
                },

                menu: function () {
                    WinJS.Navigation.navigate("/pages/menu.html", { play: this.play.bind(this) }).done(function (e) {
                        WinJS.Navigation.history.backStack.pop();// remove preloader from history
                    });
                },

                play: function () {
                    WinJS.Navigation.navigate("/pages/play.html",
                        {
                            gameOver: this.gameOver,
                            spriteSheet: this.spriteSheet
                        });
                },

                gameOver: function (score) {
                    WinJS.Navigation.navigate("/pages/gameOver.html", score).done(function (e) {
                        WinJS.Navigation.history.backStack.pop();// remove play from history
                        WinJS.Navigation.back(); // navigate 'back' to menu
                    });
                }
            })
    });

})();