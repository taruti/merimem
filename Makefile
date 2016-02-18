
all: dst/index.html

dst:
	mkdir -p dst

dst/index.html: src/index.html dst
	cp src/index.html dst/index.html
