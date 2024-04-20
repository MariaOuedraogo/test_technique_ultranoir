import React from "react";
import { FlowerShow } from "./FlowerShow";

// section with the flowershow
export function Reveal(props) {
    return (
        <React.Fragment >
            {props.children}
            <FlowerShow />
        </React.Fragment>
    );
}