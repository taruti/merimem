var stage;
var renderer;
function mainInit() {
    renderer = PIXI.autoDetectRenderer(800,600, {backgroundColor: 0x44FFFF});
    document.body.appendChild(renderer.view);
    stage = new PIXI.Container();
    stage.addChild(bar(50,50, 10, 100, 0x000000, 0xFFFF00));
    stage.addChild(bar(80,50, 10, 100, 0x000000, 0xFFFF00, 0x000000));
    stage.addChild(triangle(120, 50, 20, 20, 0));
    renderer.render(stage);
}

function bar(x1, y1, w, h) {
    var graphics = new PIXI.Graphics();
    graphics.cacheAsBitmap = true;
    var nh = h/(arguments.length-4);
    for(var i=4; i<arguments.length; i++) {
	graphics.beginFill(arguments[i]);
	graphics.drawRect(x1, y1+((i-4)*nh), w, nh);
	graphics.endFill();
    }
    return graphics;
}

function triangle(x1, y1, w, h, c) {
    var graphics = new PIXI.Graphics();
    graphics.cacheAsBitmap = true;
    graphics.beginFill(c);
    graphics.drawPolygon(x1, y1, x1+(w/2), y1+h, x1+w, y1);
    graphics.endFill();
    return graphics;
}
