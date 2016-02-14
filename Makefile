SRC = $(wildcard src/*.js)
LIB = $(SRC:src/%.js=lib/%.js)
ESLINT = $(SRC:src/%.js=lib/eslint6/%.js)
PACKAGE_JSON = 'package.json'

# (c) 2016. All rights reserved.
# Makefile that installs and runs the project.

install:
	npm install

lib: $(LIB)
lib/%.js: src/%.js
	mkdir -p $(@D)
	babel $< -o $@

jsxhint: $(SRC)
	mkdir -p $(@D)
	jsxhint $< --es6module 

eslint: $(ESLINT)
lib/eslint6/%.js: src/%.js
	mkdir -p $(@D)
	eslint $< >& $@
