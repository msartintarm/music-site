import { CANVAS, IMAGE_LOADED, IMAGE_ERROR } from 'constants';

/*
	Adds wrapper to JS key-val map that lets you instantiate DOM nodes if they aren't defined at time of get
	- Call 'get' 
*/

class elementStore {
	constructor() {
		this._container = {};
	}
	createElement(key) {
		console.warn("Node create method not implemented.");
		return null;
	} 
	create (key, val) {
		let a = this._container[key];
		if (!a) {
			a = this.createElement(key);
			this._container[key] = a;
		}
		return a;
	}
}

class images extends store {
	createElement(key) {
		let the_image = new Image();
		the_image.onLoad = () => {
			console.log(IMAGE_LOADED);
		};

		the_image.onError = () => {
			console.warn(IMAGE_ERROR);
		};
		the_image.src = key;
		return the_image;
	}
}

class canvases extends store {
	createElement(key) {
		let the_canvas = document.createElement(CANVAS);
		offscreen.width = knob_image.width * 0.5;
		offscreen.height = knob_image.height * 0.5;

		offscreen.getContext("2d").translate(
			knob_image.width * 0.5 / 2, // x
			knob_image.height * 0.5 / 2 // y
		);
	}
}

let ImageStore = new images;
let CanvasStore = new canvases;

export { ImageStore, CanvasStore };
