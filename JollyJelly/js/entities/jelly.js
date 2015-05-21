(function () {
    WinJS.Namespace.define('JollyJelly', {
        jelly: WinJS.Class.define(
            function (options) {
                this.sprite = new createjs.Sprite(options.spriteSheet);
                this.sprite.gotoAndStop(0);
                this.sprite.regX = 32;
                this.sprite.regY = 20;
                this.sprite.x = 175;
                this.sprite.y = 350;
                this.velocity = 0;
            },
            {
                accelerate: function (x) {
                    this.velocity = 9;
                    this.sprite.gotoAndStop(1);
                },

                update: function (deltaTime) {
                    var x = Math.sin(this.sprite.rotation * (Math.PI / 180));
                    var y = Math.cos(this.sprite.rotation * (Math.PI / 180));

                    this.sprite.y -= (deltaTime / 20.0) * ((this.velocity * y) - 2.4);
                    this.sprite.x += (deltaTime / 20.0) * (this.velocity) * x;
                    if (this.velocity > 0) {
                        this.velocity -= .4;
                    }
                },
                checkCollision: function (sides, seaweeds) {
                    var boundsJelly = this.sprite.getBounds();


                    for (let j = 0; j < sides.children.length; j++) {
                        var bounds = sides.children[j].getBounds();
                        var rect = {
                            left: bounds.x + sides.children[j].x,
                            right: bounds.x + bounds.width + sides.children[j].x,
                            top: bounds.y + sides.children[j].y,
                            bottom: bounds.y + bounds.height + sides.children[j].y,
                        }

                        if (Math.intersects(this.sprite.x, this.sprite.y, 20, rect.left, rect.top, rect.right, rect.bottom)) {
                            return true;
                        }
                    }
                    for (let i = 0; i < seaweeds.children.length; i++) {
                        for (let j = 0; j < seaweeds.children[i].children.length; j++) {
                            var bounds = seaweeds.children[i].children[j].getBounds();
                            var rect = {
                                left: bounds.x + seaweeds.children[i].children[j].x,
                                right: bounds.x + bounds.width + seaweeds.children[i].children[j].x,
                                top: bounds.y + seaweeds.children[i].y,
                                bottom: bounds.y + bounds.height + seaweeds.children[i].y,
                            }

                            if (Math.intersects(this.sprite.x, this.sprite.y, 20, rect.left, rect.top, rect.right, rect.bottom)) {
                                return true;
                            }
                        }
                    }
                    return false;
                },
                render: function () {

                }
            }
            )
    });

})();