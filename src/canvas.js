import { DRAW_WARN, CANVAS } from 'constants';
// import React from 'react'; // Not sure if this is needed
import { CanvasStore } from 'store';

/*
    (c) 2016. All rights reserved.
    React classes that use the render methods
*/


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
    addRefs(el) {
        this._canvas = el;
        this._ctx = el.getContext("2d");
    }
    componentWillUpdate(newProps) {
        this.draw(newProps);
    }
    render () {
        <div>
            <canvas ref={ _this.addRefs }>
            </canvas>
        </div>
    }
}

/* ---- Only export the top level React class ---- */
export { CanvasComponent as default };
