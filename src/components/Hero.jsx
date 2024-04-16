import '../styles/index.css';

export function Hero(props) {
    return (
        <div className="hero">
            <h1 className='hero__title'>notre savoir faire</h1>
            {props.children}
            
        </div>
    );
}