import React from 'react';

export function Discover(props) {
    return (
        <React.Fragment>
            <h1 className="discover__title">Discover the range</h1>
            {props.children}

        </React.Fragment>
    );
}