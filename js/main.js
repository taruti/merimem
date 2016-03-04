var stage;
var renderer;
function mainInit() {
    renderer = PIXI.autoDetectRenderer(800,600, {backgroundColor: 0x44FFFF});
    document.body.appendChild(renderer.view);
    stage = new PIXI.Container();
    stage.addChild(bar(50,50, 10, 100, 0x000000, 0xFFFF00));
    stage.addChild(bar(80,50, 10, 100, 0x000000, 0xFFFF00, 0x000000));
    stage.addChild(triangleMarkerSprite(20, 100, 0, true, false));
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

function triangleMarkerSprite(w, h, c, up1, up2) {
    var graphics = new PIXI.Graphics();
    graphics.beginFill(c);
    graphics.lineStyle(2, c, 255);
    graphics.moveTo(w/2, 2);
    graphics.lineTo(w/2, h);
    graphics.lineStyle(0, c, 255);
    var y = w;
    if(up1)
	graphics.drawPolygon(0, y, w/2, 0, w, y);
    else
	graphics.drawPolygon(0, 0, w/2, y, w, 0);
    if(up2)
	graphics.drawPolygon(0, 2+y+y, w/2, 2+y, w, 2+y+y);
    else
	graphics.drawPolygon(0, 2+y, w/2, 2+y+y, w, 2+y);
    graphics.endFill();
    var s = new PIXI.Sprite(graphics.generateTexture(1, PIXI.SCALE_MODES.LINEAR));
    return s;
}
