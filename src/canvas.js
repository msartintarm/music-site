// import React from 'react'; // Not sure if this is needed
import { ImageStore, CanvasStore } from 'store';


/*
    (c) 2016. All rights reserved.
    React classes that use the render methods
*/

const DRAW_WARN = "Implementations of canvas component must overwrite 'draw' method.";

const CANVAS = 'canvas';

/*
    - Binds canvas component
    - Propogates draw calls through the canvas when it changes.
*/ 
class CanvasComponent extends React.component {
    draw () { console.warn(DRAW_WARN); }
    constructor(props) {
        super(props);
        this._canvas = CanvasStore.create(CANVAS);
    }
    componentWillUpdate(newProps) {
        this.draw(newProps);
    }
    render () {
        <div>
            <canvas ref={ (el) => { this._canvas = el; this._ctx = el.getContext("2d"); }}>
            </canvas>
        </div>
    }
}

const MUSIC_KNOB = 'music_knob';
const MUSIC_KNOB_CANVAS = 'music_knob_canvas';
const MUSIC_KNOB_OFF_CANVAS = 'music_knob_off_canvas';
const MUSIC_KNOB_IMAGE_URL = 'knob_image.png';
const MUSIC_KNOB_SIZE = { x: 400, y: 400 };

const _x = MUSIC_KNOB_SIZE.x;
const _y = MUSIC_KNOB_SIZE.y;

const ROTATION = 'rotation';

class MusicKnob extends CanvasComponent {
    constructor(props) {
        super(props);

        // Create elements needed to prepare knob
        this._image = ImageStore.create(KNOB_IMAGE_URL);
        this._off_canvas = CanvasStore.create(MUSIC_KNOB_OFF_CANVAS);
        this._off_ctx = this._off_canvas.getContext("2d");

        // Draw initial knob
        this._off_ctx.save();
        this._off_ctx.rotate(-5 * Math.PI / 6);// Point at '7'
        this._off_ctx.drawImage(this._image,
            -_x/2, -_y/2, _x, _y);
        this._off_ctx.drawImage(this.off_canvas,
            0, 0, off_ctx.width * 0.5, off_ctx.height * 0.5);
        this._ctx.drawImage(this._off_canvas,
            0, 0, _x, _y, 0, 0, KNOB_SIZE, KNOB_SIZE);
        this._ctx.restore();
    }
    componentShouldUpdate(newProps) {
        return (newProps[ROTATION] !== this.props[ROTATION]);
    }
    draw (newProps) {
        this._ctx.save();
        this._ctx.rotate(Math.PI * 10 / 6 * 360);    // Transform from percent to radians
        this._ctx.drawImage(this._off_canvas,
            0, 0, _x, _y, 0, 0, KNOB_SIZE, KNOB_SIZE);
        this._ctx.restore();
    }
}
MusicKnob.propTypes = {
    ROTATION: React.propTypes.number  // in percentage from 1 - 100%
};
MusicKnob.defaultProps = {
    ROTATION: 0
};

/* ---- Only export the top level React class ---- */
export { Music_Dashboard as default };
