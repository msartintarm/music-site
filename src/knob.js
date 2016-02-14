import React from 'react';
import {
    CANVAS, MUSIC_KNOB, MUSIC_KNOB_CANVAS, MUSIC_KNOB_OFF_CANVAS,
    MUSIC_KNOB_IMAGE_URL, MUSIC_KNOB_SIZE, ROTATION, ReactNum
} from 'constants';
import { ImageStore, CanvasStore } from 'store';
import { CanvasComponent } from 'canvas';
/*
    (c) 2016. All rights reserved.
    React classes that use the render methods
*/

const _s = MUSIC_KNOB_SIZE;

class Music_Knob extends CanvasComponent {
    constructor(props) {
        super(props);

        // Create elements needed to prepare knob
        this._image = ImageStore.create(KNOB_IMAGE_URL);
        this._off_canvas = CanvasStore.create(MUSIC_KNOB_OFF_CANVAS);
        this._off_ctx = this._off_canvas.getContext("2d");

        // Perform rotations needed to draw knob in initial '0%' position
        this._off_ctx.save();
        this._off_ctx.rotate(-5 * Math.PI / 6);// Point at '7'
        this._off_ctx.drawImage(this._image,
            -_s/2, -_s/2, _s, _s);
        this._off_ctx.drawImage(this.off_canvas,
            0, 0, off_ctx.width * 0.5, off_ctx.height * 0.5);
        this._ctx.drawImage(this._off_canvas,
            0, 0, _s, _s, 0, 0, _s, _s);
        this._ctx.restore();
    }
    componentShouldUpdate(newProps) {
        return (newProps[ROTATION] !== this.props[ROTATION]);
    }
    draw (newProps) {
        this._ctx.save();
        this._ctx.rotate(Math.PI * 10 / 6 * 360);    // Transform from percent to radians
        this._ctx.drawImage(this._off_canvas,
            0, 0, _s, _s, 0, 0, _s, _s);
        this._ctx.restore();
    }
}
Music_Knob.propTypes = {
    ROTATION: ReactNum,  // in percentage from 1 - 100%
    width: ReactNum
};
Music_Knob.defaultProps = {
    ROTATION: 0
};

/* ---- Only export the top level React class ---- */
export { Music_Knob as default };
