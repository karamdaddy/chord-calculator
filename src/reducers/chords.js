import { SELECT_CHORD } from '../actions/actions';

const defaultState = {
    currentChord: "C"
}

function chords(state = defaultState, action) {
    switch (action.type){
        case SELECT_CHORD:
            return Object.assign({}, state, { currentChord: action.payload.data });
        default:
            return state;
    }
}



export default chords;


export function getCurrentChord(state){
    return state.currentChord;
}