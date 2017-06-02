export const SELECT_CHORD = "SELECT_CHORD";
export function selectChord(chord) {
    return {
        type: SELECT_CHORD,
        payload: { data: chord }
    }
}