import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar(){
    const navigate = useNavigate();

    return(
        <div className="Navbar-container">
            <div className="Navbar-content-left">
                <span className="Navbar-text">COCINALO</span>
            </div>
            <div className="Navbar-content-right">
                <a className="Navbar-button-1" >Precios</a>
                <a className="Navbar-button-2" onClick={() => navigate('/cocinalo')}>Cocinar</a>
            </div>
        </div>
    )
}