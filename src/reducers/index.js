import chords, { getCurrentChord, isMajor, getCurrentScale } from './chords';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
    chords
});



export default rootReducer;


export function getChord(state) {
    return getCurrentChord(state.chords);
}

export function isScaleMajor(state) {
    return isMajor(state.chords);
}

export function getScale(state) {
    return getCurrentScale(state.chords);
}