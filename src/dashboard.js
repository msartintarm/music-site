// import React from 'react'; // Not sure if this is needed
import Music_Knob from 'knob';

/*
    (c) 2016. All rights reserved.
    React classes that use the render methods
*/

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
