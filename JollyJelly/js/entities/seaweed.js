(function () {
    WinJS.Namespace.define('JollyJelly', {
        seaweed: WinJS.Class.define(
            function (options) {

                this.sprite = new createjs.Sprite(options.spriteSheet);
                this.sprite.gotoAndStop(2);
                this.velocity = 2;
                this.rowInterval = 2500;
                this.timeToAddRow = this.rowInterval;

                this.seaweedRow = new createjs.Container();

                for (let i = 0; i < 8; i++) {
                    var weed = new createjs.Sprite(options.spriteSheet);
                    weed.gotoAndStop(2);
                    weed.x = i * 64;
                    weed.y = -64;
                    this.seaweedRow.addChild(weed);
                }

                this.graphics = new createjs.Container();

                this.addRow();
            },
            {
                update: function (deltaTime) {
                    this.timeToAddRow -= deltaTime;
                    if (this.timeToAddRow < 0) {
                        this.timeToAddRow = this.rowInterval;
                        this.addRow();
                    }
                    for (let i = 0; i < this.graphics.children.length; i++) {
                        this.graphics.children[i].y += deltaTime / 20.0 * this.velocity;
                        if (this.graphics.children[i].y > 1000) { // remmove row at bottom.
                            this.graphics.removeChildAt(i);
                        }
                    }
                },
                render: function () {

                },

                addRow: function () {
                    var row = this.seaweedRow.clone(true);
                    row.y = (Math.random() * -128) - 64
                    var toRemove = Math.floor(Math.random() * 5.0);
                    row.removeChildAt(toRemove);
                    row.removeChildAt(toRemove);
                    row.removeChildAt(toRemove);
                    this.graphics.addChild(row);
                }
            }
            )
    });

})();