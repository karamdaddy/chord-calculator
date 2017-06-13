export const TRANSPOSE_DOWN = "TRANSPOSE_DOWN";
export function transposeDown(currentChord) {
    return {
        type: TRANSPOSE_DOWN,
        payload: { data: currentChord }
    }
}

export const TRANSPOSE_UP = "TRANSPOSE_UP";
export function transposeUp(currentChord) {
    return {
        type: TRANSPOSE_UP,
        payload: { data: currentChord }
    }
}

export const TOGGLE_MAJOR_MINOR = "TOGGLE_MAJOR_MINOR";
export function toggleMajorMinor(isMajor) {
    return {
        type: TOGGLE_MAJOR_MINOR,
        payload: { data: isMajor }
    }
}