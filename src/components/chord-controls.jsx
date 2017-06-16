import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./chord-controls.css";
import { transposeDown, transposeUp } from "../actions/actions";
import { getChord, isScaleMajor } from "../reducers/index"


function mapStateToProps(state) {
    return {
        currentChord: getChord(state),
        isMajor: isScaleMajor(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        transposeDown: (chord) => {
            dispatch(transposeDown(chord))
        },
        transposeUp: (chord) => {
            dispatch(transposeUp(chord))
        },
    }
}


function ChordControls({ transposeDown, transposeUp, currentChord, isMajor }) {
    const chordToDisplay = isMajor ? currentChord : `${currentChord}m`
    return (
        <div className="chordContorls noSelection">
            <div className="chordControls-button" onClick={() => transposeDown(currentChord)}>-</div>
            <div className="chordControls-currentChord">{chordToDisplay}</div>
            <div className="chordControls-button" onClick={() => transposeUp(currentChord)}>+</div>
        </div>
    )
}



const enhance = compose(
   connect(mapStateToProps, mapDispatchToProps)
);
export default enhance(ChordControls);