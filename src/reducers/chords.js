import { TRANSPOSE_DOWN, TRANSPOSE_UP, TOGGLE_MAJOR_MINOR } from '../actions/actions';
import { fullChordList } from "../constants/constants";

const defaultState = {
    currentChord: "C",
    isMajor: true
}

function chords(state = defaultState, action) {
    switch (action.type) {
        case TRANSPOSE_DOWN:
            return Object.assign({}, state, { currentChord: fullChordList[indexOfNewChord(action.payload.data, "down")] });
        case TRANSPOSE_UP:
            return Object.assign({}, state, { currentChord: fullChordList[indexOfNewChord(action.payload.data, "up")] });
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



export default chords;


export function getCurrentChord(state) {
    return state.currentChord;
}

export function isMajor(state) {
    return state.isMajor;
}