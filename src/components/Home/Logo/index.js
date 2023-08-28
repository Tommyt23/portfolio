import './index.scss';
import LogoS from '../../../assets/images/logo-s.png'


const Logo = () => {

    return (
        <div className="logo-container">
            <img className='solid-logo' src={LogoS} alt="T"/>
            <svg
            width="559pt"
            height="897pt"
            version="1.0"
            viewBox="0 0 597 897"
            xmlns='http://www.w3.org/2000/svg'>
                <g>
                    <path />
                </g>
            </svg>
        </div>
    )
}

export default Logo