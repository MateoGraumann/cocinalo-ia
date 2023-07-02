import '../styles/Home.css'
import ImageGirl from '../media/girl_image.png'

export default function Home(){
    return(
        <div className='Home-container'>
            <div className="Home-content-image-and-description">
                <div className="Home-description-container">
                    <p>¿No sabes que cocinar?</p>
                    <p>Deja que una IA lo haga por ti</p>
                    <a href='#' className='Cook-btn'>Comenzar a cocinar</a>
                </div>
                <div className="Home-image-container">
                    <img src={ImageGirl} alt='Chica_cocinando' />
                </div>
            </div>
        </div>
    )
}