import React from 'react';
import { FlowerShow } from './FlowerShow';

export function Reveal(props) {
    return (
        <React.Fragment >
            {props.children}

            <FlowerShow>

            </FlowerShow>
        </React.Fragment>
    );
}