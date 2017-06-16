import * as React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import ChordControls from "./chord-controls";
import MinorMajor from "./minor-major";
import { fullChordList } from "../constants/constants";
import { getChord } from "../reducers/index";
import "./chord-controller.css";


function mapStateToProps(state){
    return {
        currentChord: getChord(state)
    }
}


function calculateScaleForKey(startingChord) {
    let constructedChordList = [];
    const indexOfChordInArray = fullChordList.indexOf(startingChord);

    let numOfCyles = 0;
    for (let i = indexOfChordInArray; constructedChordList.length < 7; i++){
        if (i >= fullChordList.length){
            i = 0;
        }
        switch (numOfCyles){
            case 0:
            case 2:
            case 4:
            case 5:
            case 7:
            case 9:
            case 11:
                constructedChordList =  constructedChordList.concat(`${fullChordList[i]} `);
                break;
            default:
        }
        numOfCyles++;
    }

    return constructedChordList;
}

function ChordList({ currentChord }) {
    const list = calculateScaleForKey(currentChord);
    return (
        <div>
            <div className="chordList-controls">
                <ChordControls />
            </div>
            <div className="chordList-minorMajor">
                <MinorMajor />
            </div>
            <div className="chordList-list">
                {list}
            </div>
        </div>
    )
}

const enhance = compose(
   connect(mapStateToProps)
);
export default enhance(ChordList);