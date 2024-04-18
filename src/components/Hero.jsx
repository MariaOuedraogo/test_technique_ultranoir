import '../styles/index.css';
import { Slider } from './Slider';


export function Hero(props) {
    return (
        <div className="hero">
            <img src="../public/logo_dior.svg" alt="" className='hero__img' />
            <h1 className='hero__title'>notre <br />savoir faire</h1>
            {props.children}
            <Slider>

            </Slider>


        </div>
    );
}