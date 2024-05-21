import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="../src/assets/logotipo-valeste.png" alt="Logo" width="50" className="d-inline-block align-text-top"></img>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/category/Bikinis" className="nav-link active" aria-current="page">Bikinis</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/Accesorios" className="nav-link">Accesorios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/Vestimenta" className="nav-link">Vestimenta</Link>
                        </li>
                    </ul>
                    <CartWidget className="cart-widget" />
                </div>
            </nav >
        </div >
    )
}

export default NavBar;