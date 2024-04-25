import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

    return(
        <div className="nav-bar">
            <div>
               <img style={{width: "50px"}} src="../src/assets/logotipo-valeste.png" alt="" />
            </div>
            <ul>
                <li>Bikinis</li>
                <li>Accesorios</li>
                <li>Vestimenta</li>
            </ul>
            <CartWidget /> 
        </div>
    )
}

export default NavBar