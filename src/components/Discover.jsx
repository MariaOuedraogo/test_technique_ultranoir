import "../styles/index.css";
import React from "react";
import { Marquee } from "./Marquee";

// section with the marquee and the product listing
export function Discover(props) {
    return (
            <div className="discover-container">

                {props.children}
                <Marquee></Marquee>
            </div>
        
    );
}