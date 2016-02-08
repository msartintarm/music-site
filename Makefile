SRC = $(wildcard src/*.js)
LIB = $(SRC:src/%.js=lib/%.js)
PACKAGE_JSON = 'package.json'

install:
	npm install

lib: $(LIB)
lib/%.js: src/%.js
	mkdir -p $(@D)
	babel $< -o $@
