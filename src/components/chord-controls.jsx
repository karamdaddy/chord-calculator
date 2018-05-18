import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./chord-controls.css";
import { selectChord as reducerSelectChord } from "../actions/actions";
import { getChord, isScaleMajor } from "../reducers/index"
import { fullChordList } from "../constants/constants";


function mapStateToProps(state) {
    return {
        currentChord: getChord(state),
        isMajor: isScaleMajor(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectChord: (chord) => {
            dispatch(reducerSelectChord(chord))
        }
    }
}


function ChordControls({ selectChord, currentChord, isMajor }) {
    const chordToDisplay = isMajor ? currentChord : `${currentChord}m`
    return (
        <div className="chordContorls noSelection">
        {fullChordList.map(chord => <div key={chord} className="chordControls-button" onClick={() => selectChord(chord)}>{chord}</div>)}
        <div className="chordControls-currentChord">{chordToDisplay}</div>
        </div>
    )
}



const enhance = compose(
   connect(mapStateToProps, mapDispatchToProps)
);
export default enhance(ChordControls);