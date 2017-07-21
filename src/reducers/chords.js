import { TRANSPOSE_DOWN, TRANSPOSE_UP, TOGGLE_MAJOR_MINOR } from '../actions/actions';
import { fullChordList } from "../constants/constants";

const defaultState = {
    currentChord: "C",
    isMajor: true,
    currentScale: calculateScaleForKey("C", true)
}

function chords(state = defaultState, action) {
    let newChord;
    switch (action.type) {
        case TRANSPOSE_DOWN:
            newChord = fullChordList[indexOfNewChord(action.payload.data, "down")];
            return Object.assign({}, state, { currentChord: newChord, currentScale: calculateScaleForKey(newChord, isMajor(state)) });
        case TRANSPOSE_UP:
            newChord = fullChordList[indexOfNewChord(action.payload.data, "up")];
            return Object.assign({}, state, { currentChord: newChord, currentScale: calculateScaleForKey(newChord, isMajor(state)) });
        case TOGGLE_MAJOR_MINOR:
            return Object.assign({}, state, { isMajor: action.payload.data, currentScale: calculateScaleForKey(getCurrentChord(state), action.payload.data) });
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

function calculateScaleForKey(startingChord, isMajor) {
    //Major W W H W W W H  OR  2 2 1 2 2 2 1
    //Minor W H W W H W W  OR  2 1 2 2 1 2 2 
    let constructedChordList = [];
    let index = fullChordList.indexOf(startingChord);
    const sizeOfChordsList = fullChordList.length;

    const majorScale = [0, 2, 2, 1, 2, 2, 2, 1];
    const minorScale = [0, 2, 1, 2, 2, 1, 2, 2];

    const minorChordsForMajorScale = [1, 2, 5];

    if (isMajor){
        majorScale.map((value) => {
            index += value;
            return constructedChordList.push(fullChordList[index%sizeOfChordsList]);
        });
        minorChordsForMajorScale.map(value => constructedChordList[value] = `${constructedChordList[value]}m`);
        constructedChordList[6] = `${constructedChordList[6]}dim`
    }
    else {
        minorScale.map((value, i) => {
            index += value;
            return constructedChordList.push(fullChordList[index%sizeOfChordsList]);
        });
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