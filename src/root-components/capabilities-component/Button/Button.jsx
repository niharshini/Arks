import PropTypes from "prop-types";
import React from "react";
import {useReducer} from "react";
import {useHistory} from 'react-router';
import "./style.css";
import {NavLink} from "react-router-dom";

export const Button = ({
                           property1,
                           className,
                           exploreClassName,
                           text = "EXPLORE",
                           arrowSmallRight = "https://c.animaapp.com/1hVqgpfT/img/arrow-small-right-1-3.svg",
                           link = "/"
                       }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <NavLink
            className={`capabilitiesButton ${state.property1} ${className}`}
            to={link}>
            {["default", "variant-3"].includes(state.property1) && <div className="explore">{text}</div>}

            {["variant-4", "variant-5", "with-arrow"].includes(state.property1) && (
                <>
                    <div className={`text-wrapper ${exploreClassName}`}>{text}</div>
                    <img
                        className="arrow-small-right"
                        alt="Arrow small right"
                        src={
                            state.property1 === "variant-5"
                                ? arrowSmallRight
                                : state.property1 === "variant-4"
                                    ? "https://c.animaapp.com/1hVqgpfT/img/arrow-small-right-1-2.svg"
                                    : "https://c.animaapp.com/1hVqgpfT/img/arrow-small-right-1-4.svg"
                        }
                    />
                </>
            )}
        </NavLink>
    );
};

function reducer(state, action) {
    if (state.property1 === "default") {
        switch (action) {
            case "click":
                return {
                    property1: "variant-3",
                };
        }
    }

    if (state.property1 === "with-arrow") {
        switch (action) {
            case "mouse_enter":
                return {
                    property1: "variant-4",
                };
        }
    }

    if (state.property1 === "variant-4") {
        switch (action) {
            case "mouse_leave":
                return {
                    property1: "with-arrow",
                };
        }
    }

    return state;
}

Button.propTypes = {
    property1: PropTypes.oneOf(["default", "variant-5", "with-arrow", "variant-3", "variant-4"]),
    text: PropTypes.string,
    arrowSmallRight: PropTypes.string,
};
