import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./chord-buttons.css";
// import { fullChordList } from "../constants/constants";
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
        <div>
            <span onClick={() => transposeDown(currentChord)}>down </span>
            {currentChord}
            <span onClick={() => transposeUp(currentChord)}> up</span>
        </div>
    )
}



const enhance = compose(
   connect(mapStateToProps, mapDispatchToProps)
);
export default enhance(ChordButtons);