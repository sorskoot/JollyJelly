(function () {
    "use strict";

    WinJS.Namespace.define("JollyJelly", {
        sides: WinJS.Class.define(function (options) {
            //this.width = 0;
            //this.height = 0;
            //this.x = 0;
            //this.y = 0;
            this.bitmap = null;
            this.velocity = 2;
            //this.acceleration = 0;

            this.left = new createjs.Sprite(options.spriteSheet);
            this.left.gotoAndStop(3);
            this.left.x = -4;
            this.right = new createjs.Sprite(options.spriteSheet);
            this.right.gotoAndStop(4);
            this.right.x = 420;

            this.graphics = new createjs.Container();


            for (let i = 0; i < 20; i++) {
                let templeft = this.left.clone();
                templeft.y = i * 64 - 128;
                let tempright = this.right.clone();
                tempright.y = i * 64 - 128;
                this.graphics.addChild(templeft, tempright);
            }
        }, {
            update: function (delta) {
                for (let i = 0; i < this.graphics.children.length; i++) {
                    this.graphics.children[i].y += delta / 20.0 * this.velocity;
                    if (this.graphics.children[i].y > 960) {
                        this.graphics.children[i].y -= 1024;
                    }
                }
            },
            render: function () {
          
            }

        })

    });
})();