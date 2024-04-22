import "../styles/index.css";
import PropTypes from "prop-types";

export function Button(props) {
    return (
        <button {...props} className={`button ${props.className}`}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
