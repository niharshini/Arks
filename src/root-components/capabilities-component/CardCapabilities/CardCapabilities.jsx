/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import {useReducer} from "react";
import {Button} from "../Button";
import "./capabilitiesStyles.css";

export const CardCapabilities = ({
                                     property1,
                                     title = "Hello Title",
                                     description = "" +
                                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                                     image,
                                     color = "#fff",
                                     colorSecondary = "#fff",
                                     link = "/"
                                 }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default"
    });

    return (
        <div
            className="card-capabilities"
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div className="overlap-group">
                <div className="group" style={{
                    backgroundImage: `url(${image ? image : "https://c.animaapp.com/1hVqgpfT/img/rectangle-112-2.png"})`
                }}>
                    <div className="rectangle"/>
                </div>
                <div className={`frame property-1-1-${state.property1}`}>
                    <div className="div" style={{color: color}}>{title}</div>
                    {state.property1 === "variant-2" && (
                        <p className="p" style={{color: colorSecondary}}>
                            {description}
                        </p>
                    )}
                </div>
                <Button
                    arrowSmallRight="https://c.animaapp.com/1hVqgpfT/img/arrow-small-right-1-5.svg"
                    className="button-instance"
                    exploreClassName="instance-node"
                    property1="variant-5"
                    text="KNOW MORE"
                />
            </div>
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                property1: "variant-2"
            };

        case "mouse_leave":
            return {
                ...state,
                property1: "default"
            };
    }

    return state;
}

CardCapabilities.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"])
};
