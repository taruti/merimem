
all: dst/index.html dst/pixi.js dst/main.js dst/style.css

dst:
	mkdir -p dst

dst/index.html: src/index.html dst
	cp src/index.html dst/index.html

dst/main.js: js/main.js
	cp js/main.js dst/main.js

dst/pixi.js: ext/pixi.min.js
	cp ext/pixi.min.js dst/pixi.js

dst/style.css: css/style.scss
	sass css/style.scss dst/style.css
