import '../styles/Home.css';
import ImageGirl from '../media/background/girl_image.png';
import Navbar from '../components/Home-components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();
    return(
        <div className='Home-container'>
            <Navbar />
            <div className="Home-content-image-and-description">
                <div className="Home-description-container">
                    <p>¿No sabes que cocinar?</p>
                    <p>Deja que una IA lo haga por ti</p>
                    <a className='Cook-btn' onClick={() => navigate('cocinalo')}>Comenzar a cocinar</a>
                </div>
                <div className="Home-image-container">
                    <img src={ImageGirl} alt='Chica_cocinando' />
                </div>
            </div>
        </div>
    )
}