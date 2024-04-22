import "../styles/index.css";
import React from "react";
import { Marquee } from "./Marquee";
import { Listing } from "./Listing";


// section with the marquee and the product listing
export function Discover(props) {
    return (
            <div className="discover-container">

                {props.children}
                <Marquee></Marquee>
                <Listing></Listing>

            </div>
        
    );
}