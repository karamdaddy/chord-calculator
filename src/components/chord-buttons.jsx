import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./chord-buttons.css";
import { transposeDown, transposeUp } from "../actions/actions";
import { getChord } from "../reducers/index"


function mapStateToProps(state) {
    return {
        currentChord: getChord(state)
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


function ChordButtons({ transposeDown, transposeUp, currentChord }) {
    return (
        <div className="chordContorls">
            <div className="chordControls-button" onClick={() => transposeDown(currentChord)}>-</div>
            <div className="chordControls-currentChord">{currentChord}</div>
            <div className="chordControls-button" onClick={() => transposeUp(currentChord)}>+</div>
        </div>
    )
}



const enhance = compose(
   connect(mapStateToProps, mapDispatchToProps)
);
export default enhance(ChordButtons);