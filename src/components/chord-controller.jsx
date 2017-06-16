import * as React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import ChordControls from "./chord-controls";
import MinorMajor from "./minor-major";
import { getChord, getScale } from "../reducers/index";
import "./chord-controller.css";


function mapStateToProps(state){
    return {
        currentChord: getChord(state),
        currentScale: getScale(state)
    }
}

function ChordList({ currentChord, currentScale }) {
    return (
        <div>
            <div className="chordList-controls">
                <ChordControls />
            </div>
            <div className="chordList-minorMajor">
                <MinorMajor />
            </div>
            <div className="chordList-list">
                {currentScale}
            </div>
        </div>
    )
}

const enhance = compose(
   connect(mapStateToProps)
);
export default enhance(ChordList);