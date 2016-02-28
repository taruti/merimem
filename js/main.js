var stage;
var renderer;
function mainInit() {
    renderer = PIXI.autoDetectRenderer(800,600, {backgroundColor: 0x44FFFF});
    document.body.appendChild(renderer.view);
    stage = new PIXI.Container();
    stage.addChild(bar(50,50, 10, 100, 0x000000, 0xFFFF00));
    stage.addChild(bar(80,50, 10, 100, 0x000000, 0xFFFF00, 0x000000));
    renderer.render(stage);
}

function bar(x1, y1, w, h) {
    var graphics = new PIXI.Graphics();
    var nh = h/(arguments.length-4);
    for(var i=4; i<arguments.length; i++) {
	graphics.beginFill(arguments[i]);
	graphics.drawRect(x1, y1+((i-4)*nh), w, nh);
	graphics.endFill();
    }
    return graphics;
}
