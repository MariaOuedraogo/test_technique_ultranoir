import React from "react";
import { FlowerShow } from "./FlowerShow";
import PropTypes from "prop-types";

// section with the flowershow
export function Reveal(props) {
    return (
        <React.Fragment >
            {props.children}
            <FlowerShow />
        </React.Fragment>
    );
}

Reveal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
