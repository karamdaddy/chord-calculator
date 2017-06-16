import { TRANSPOSE_DOWN, TRANSPOSE_UP, TOGGLE_MAJOR_MINOR } from '../actions/actions';
import { fullChordList } from "../constants/constants";

const defaultState = {
    currentChord: "C",
    isMajor: true,
    currentScale: calculateScaleForKey("C")
}

function chords(state = defaultState, action) {
    let newChord;
    switch (action.type) {
        case TRANSPOSE_DOWN:
            newChord = fullChordList[indexOfNewChord(action.payload.data, "down")];
            return Object.assign({}, state, { currentChord: newChord, currentScale: calculateScaleForKey(newChord) });
        case TRANSPOSE_UP:
            newChord = fullChordList[indexOfNewChord(action.payload.data, "up")];
            return Object.assign({}, state, { currentChord: newChord, currentScale: calculateScaleForKey(newChord) });
        case TOGGLE_MAJOR_MINOR:
            return Object.assign({}, state, { isMajor: action.payload.data });
        default:
            return state;
    }
}


function indexOfNewChord(startingChord, transposeDirection) {
    let indexOfCurrentChord = fullChordList.indexOf(startingChord);
    let indexOfNewChord;
    if (transposeDirection === "down") {
        indexOfNewChord = indexOfCurrentChord - 1;
        if (indexOfNewChord < 0) {
            indexOfNewChord = fullChordList.length - 1;
        }
    }
    else {
        indexOfNewChord = indexOfCurrentChord + 1;
        if (indexOfNewChord === fullChordList.length) {
            indexOfNewChord = 0;
        }
    }
    return indexOfNewChord;
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



export default chords;


export function getCurrentChord(state) {
    return state.currentChord;
}

export function isMajor(state) {
    return state.isMajor;
}

export function getCurrentScale(state) {
    return state.currentScale;
}