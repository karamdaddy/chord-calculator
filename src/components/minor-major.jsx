import * as React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { isScaleMajor } from "../reducers/index";
import { toggleMajorMinor } from "../actions/actions";
import "./minor-major.css";

function mapStateToProps(state){
    return {
        isMajor: isScaleMajor(state)
    }
}


function mapDispatchToProps(dispatch) {
    return {
        toggleIsMajor: (isMajor) => {
            dispatch(toggleMajorMinor(isMajor))
        },
    }
}

function MinorMajor({ isMajor, toggleIsMajor }) {
    return (
        <div className="minorMajor noSelection">
            <div onClick={() => toggleIsMajor(true)} className="minorMajor-button">Major</div>
            <div className={`minorMajor-toggle ${isMajor ? "minorMajor-major" : "minorMajor-minor"}`}>
                <label className="switch">
                    <input type="checkbox" />
                        <div className="slider round"></div>
                </label>
            </div>
            <div onClick={() => toggleIsMajor(false)} className="minorMajor-button">Minor</div>
        </div>
    )
}

const enhance = compose(
   connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(MinorMajor);