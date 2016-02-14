// import React from 'react'; // Not sure if this is needed

/*
    (c) 2016. All rights reserved.
    React classes that use the render methods
*/

const DEFAULT = 'default';
const CANVAS = 'canvas';
const MUSIC_KNOB = 'music_knob';
const MUSIC_KNOB_CANVAS = 'music_knob_canvas';

const pT = React.propTypes;

const DRAW_WARN = "Implementations of canvas component must overwrite 'draw' method.";

/*
    - Binds canvas component
    - Propogates draw calls through the canvas when it changes.
*/ 
class CanvasComponent extends React.component {
    draw () { console.warn(DRAW_WARN); }
    constructor(props) {
        super(props);
        root.init(props);
    }
    componentDidUpdate(newProps) {
        root.update(props);
        root.draw(props);
    }
    defaultProps = {
        rotation: 0
    }
    render () {
        <div>
            <canvas ref={ (elem) => this._canvas = elem }>
            </canvas>
        </div>
    }
}

class Music_Knob extends CanvasComponent {
    draw () {
        this._canvas.fill
    }
}

/*
    Generic class that links draw method through canvas
*/
class CanvasElement {
    propTypes = {
        image: pT.node.isRequired,
        root: pT.node.isRequired,
        positionX: pT.number.isRequired,
        positionY: pT.number.isRequired,
        className: pT.string
    }

}

const KNOB_TYPES = {
    'default': {
        ''
    }
};



class Music_Knob extends CanvasElement {


    constructor(posX, posY, rotation, type) {
        this._changed = true;
        this.posX = posX;
        this.posY = posY;
    }

    update(posX, posY)
        
    draw (canvas) {

    }


let Music_Track_Holder_Controls = (controls_data) => {
    <div>
        <Music_Knob>
            {track_data.volume(track_)}
        </Music_Knob>

    </div>
};

let Music_Track_Holder = (track_data) => {
    <div>
        <Music_Track_Holder_Controls
            volume={track_data.volume} />
    </div>
};

let Music_Dashboard = (dashboard_data) => {
    <div>
        {dashboard_data.tracks.map(track =>
            <Music_Track_Holder
                volume={dashboard_data.volume} />
        )}
    </div>
};

/* ---- Only export the top level React class ---- */
export { Music_Dashboard as default };
