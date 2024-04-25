import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="../src/assets/logotipo-valeste.png" alt="Logo" width="30" className="d-inline-block align-text-top"></img>
                        Valeste
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Bikinis</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accesorios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vestimenta</a>
                        </li>
                    </ul>
                </div>
            </nav >
            <CartWidget />
        </div >
    )
}

export default NavBar