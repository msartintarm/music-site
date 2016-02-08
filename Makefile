SRC = $(wildcard src/*.js)
LIB = $(SRC:src/%.js=lib/%.js)
PACKAGE_JSON = 'package.json'

# (c) 2016. All rights reserved.
# Makefile that installs and runs the project.

install:
	npm install

lib: $(LIB)
lib/%.js: src/%.js
	mkdir -p $(@D)
	babel $< -o $@
