export const TOGGLE_MAJOR_MINOR = "TOGGLE_MAJOR_MINOR";
export function toggleMajorMinor(isMajor) {
    return {
        type: TOGGLE_MAJOR_MINOR,
        payload: { data: isMajor }
    }
}

export const SELECT_CHORD = "SELECT_CHORD";
export function selectChord(chord) {
    return {
        type: SELECT_CHORD,
        payload: { data: chord }
    }
}