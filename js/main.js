var stage;
var renderer;
function mainInit() {
    renderer = PIXI.autoDetectRenderer(800,600, {backgroundColor: 0x44FFFF});
    document.body.appendChild(renderer.view);
    stage = new PIXI.Container();
    renderer.render(stage);
}
