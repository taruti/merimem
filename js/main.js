var stage;
var renderer;
function mainInit() {
    renderer = PIXI.autoDetectRenderer(800,600, {backgroundColor: 0x44FFFF});
    document.body.appendChild(renderer.view);
    stage = new PIXI.Container();
    stage.addChild(bar2(50,50, 10, 100, 0x000000, 0xFFFF00));
    stage.addChild(bar3(80,50, 10, 100, 0x000000, 0xFFFF00, 0x000000));
    renderer.render(stage);
}
function bar2(x1, y1, w, h, c1, c2) {
    var graphics = new PIXI.Graphics();
    graphics.beginFill(c1);
    graphics.drawRect(x1, y1, w, h/2);
    graphics.endFill();
    graphics.beginFill(c2);
    graphics.drawRect(x1, y1+(h/2), w, h/2);
    graphics.endFill();
    return graphics
}
function bar3(x1, y1, w, h, c1, c2, c3) {
    var graphics = new PIXI.Graphics();
    graphics.beginFill(c1);
    graphics.drawRect(x1, y1, w, h/3);
    graphics.endFill();
    graphics.beginFill(c2);
    graphics.drawRect(x1, y1+(h/3), w, h/3);
    graphics.endFill();
    graphics.beginFill(c3);
    graphics.drawRect(x1, y1+(2*h/3), w, h/3);
    graphics.endFill();
    return graphics
}

