import "../styles/index.css";

export function Button(props) {
    return (
        <button {...props} className={`button ${props.className}`}>
                        {props.children}
        </button>
    );
}