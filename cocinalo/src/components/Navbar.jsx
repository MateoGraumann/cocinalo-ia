import '../styles/Home.css'

export default function Navbar(){
    return(
        <div className="Navbar-container">
            <div className="Navbar-content-left">
                <span className="Navbar-text">COCINALO</span>
            </div>
            <div className="Navbar-content-right">
                <a className="Navbar-button-1" href='#'>Precios</a>
                <a className="Navbar-button-2" href='#'>Cocinar</a>
            </div>
        </div>
    )
}