import chords, { getCurrentChord } from './chords';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
    chords
});



export default rootReducer;


export function getChord(state){
    return getCurrentChord(state.chords);
}