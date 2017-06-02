import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./chord-buttons.css";
import { fullChordList } from "../constants/constants";
import { selectChord } from "../actions/actions";


function mapDispatchToProps(dispatch) {
    return {
        chordClicked: (chord) => {
            dispatch(selectChord(chord))
        }
    }
}


function ChordButtons({ chordClicked }) {
    return (
        <div>
            {fullChordList.map((chord, index) =>{
                return <span key={index} onClick={() => chordClicked(chord)} className="chordButton-chord">{chord}</span>
            })}
        </div>
    )
}



const enhance = compose(
   connect(null, mapDispatchToProps)
);
export default enhance(ChordButtons);