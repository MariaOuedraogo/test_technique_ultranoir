// import "../styles/index.css";
import { Marquee } from "./Marquee";
import { Listing } from "./Listing";
import PropTypes from "prop-types";


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

Discover.propTypes = {
    children: PropTypes.node
};
