import chords, { getCurrentChord, isMajor } from './chords';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
    chords
});



export default rootReducer;


export function getChord(state){
    return getCurrentChord(state.chords);
}

export function isScaleMajor(state) {
    return isMajor(state.chords);
}