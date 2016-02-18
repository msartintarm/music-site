SRC = $(wildcard src/*.js)
LIB = $(SRC:src/%.js=lib/%.js)
ESLINT = $(SRC:src/%.js=lib/eslint6/%.js)
PACKAGE_JSON = package.json

BR_IN = lib/main.js
BR_OUT = lib/bundle.js
BR_FLAGS = -t [ babelify --presets [ es2015 react ] ]

NPM_LOCAL = react react-dom webpack webpack-dev-server babelify babel-preset-es2015 babel-preset-react
NPM_GLOBAL = browserify babel-cli eslint babel-eslint

# (c) 2016. All rights reserved.
# Makefile that installs and runs the project.

install:
	npm install $(NPM_LOCAL)
	npm install -g $(NPM_GLOBAL)

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

browserify: $(BROWSERIFY)
	browserify $(MAIN_LIB) -o $(BUNDLE) $(BR_FLAGS)
