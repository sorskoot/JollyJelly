(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/preloader.html", {
        ready: function (element, options) {

            //var queue = new createjs.LoadQueue();
            //queue.installPlugin(createjs.Sound);

            //queue.on("complete", handleComplete, this);

            ////queue.loadFile({ id: "sound-die", src: "audio/die.wav" });
            ////queue.loadFile({ id: "sound-forward", src: "audio/forward.wav" });
            ////queue.loadFile({ id: "sound-score", src: "audio/score.wav" });

            //queue.loadManifest([
            //       {
            //           id: 'spritesheet',
            //           src: "sprites/JollyJelly.json",
            //           type: createjs.LoadQueue.JSON
            //       }]);

            //function handleComplete(data) {
            //    //createjs.Sound.play("sound");

            //    var spritesheet = queue.getResult("spritesheet");
                
            //    options.onComplete(spritesheet);
            //}

            var manifest = [
                   {
                       id: 'spritesheet',
                       src: "sprites/JollyJelly.json",
                       type: createjs.LoadQueue.JSON
                   }];
           

            var spritesheet = {};
            var loader = new createjs.LoadQueue(false);

            loader.addEventListener("fileload", function (data) {
                spritesheet = new createjs.SpriteSheet(data.result);
            }.bind(this));

            loader.addEventListener("complete", function (x) {
                options.onComplete(spritesheet);
            }.bind(this));

            loader.loadManifest(manifest);
        }
    });
})();
