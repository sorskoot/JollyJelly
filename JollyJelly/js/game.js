/// <reference path="lib/easeljs-0.8.0.combined.js" />
/// <reference path="lib/preloadjs-0.6.0.combined.js" />
/// <reference path="lib/tweenjs-0.6.0.combined.js" />
(function () {

    //usefull?
    //https://github.com/zerojuan/pwdo-runman/blob/master/js/entities/parallaxlayer.js

    WinJS.Namespace.define("JollyJelly", {
        game: WinJS.Class.define(
             function game(options) {
                 var self = this;
                 var menudata, images, spriteSheet;

                 images = images || {}
                 menudata = {};

                 self.stage = new createjs.Stage("demoCanvas");

                 this.jelly = new JollyJelly.jelly({ spriteSheet: options.spriteSheet });
                 this.sides = new JollyJelly.sides({ spriteSheet: options.spriteSheet });
                 this.seaweeds = new JollyJelly.seaweed({ spriteSheet: options.spriteSheet });

                 this.stage.addChild(this.jelly.sprite, this.sides.graphics, this.seaweeds.graphics);

                 self.stage.addEventListener("stagemousedown", function () {
                     this.jelly.accelerate();
                 }.bind(this));

                 self.stage.addEventListener("stagemouseup", function () {
                     this.jelly.sprite.gotoAndStop(0);
                 }.bind(this));

                 createjs.Ticker.on("tick", tick.bind(this));
                 createjs.Ticker.setFPS(40);

                 accelerometer = Windows.Devices.Sensors.Accelerometer.getDefault();

                 // Establish the report interval
                 var minimumReportInterval = accelerometer.minimumReportInterval;
                 var reportInterval = 16;//minimumReportInterval > 16 ? minimumReportInterval : 16;
                 accelerometer.reportInterval = reportInterval;

                 // Establish the event handler
                 accelerometer.addEventListener("readingchanged", function (e) {
                     var reading = e.reading;
                     var accelX = reading.accelerationX;
                     var accelY = reading.accelerationY;
                     var accelZ = reading.accelerationZ;
                     this.jelly.sprite.rotation -= accelX * 5;

                     if (this.jelly.sprite.rotation < -90) {
                         this.jelly.sprite.rotation = -90;
                     }
                     if (this.jelly.sprite.rotation > 90) {
                         this.jelly.sprite.rotation = 90;
                     }
                     //$('#eventOutputX').innerHTML = accelX * 5;
                     //$('#eventOutputY').innerHTML = this.jelly.sprite.rotation;
                 }.bind(this));
                 //  }

             }, {
                 stage: {},
                 jelly: {
                     sprite: {},
                     velocity: 0
                 }
             }
            )
    });

    //function fileloaded(data) {
    //    spriteSheet = new createjs.SpriteSheet(data.result);
    //    this.jelly.sprite = new createjs.Sprite(spriteSheet);
    //    this.jelly.sprite.gotoAndStop(0);
    //    this.jelly.sprite.x = 175;
    //    this.jelly.sprite.y = 350;
    //    this.stage.addChild(this.jelly.sprite);
    //}

    function tick(event) {
        this.jelly.update(event.delta);
        this.sides.update(event.delta);
        this.seaweeds.update(event.delta);

        if (this.jelly.checkCollision(this.sides.graphics, this.seaweeds.graphics)) {
            // end game
        }

        //update stage
        this.stage.update(event);
    }
})();
