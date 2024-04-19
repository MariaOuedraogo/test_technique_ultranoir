import '../styles/index.css';
import React from 'react';
import { Marquee } from './Marquee';



export function Discover(props) {
    return (
        
            <div className="discover-container">

                {props.children}
                <Marquee></Marquee>
            </div>
        
    );
}