import airbnbLogo from "../assets/airbnb-logo.png"
import "./Navbar.css"
export default function Navbar() {
    return (
        <nav className="nav">
            <img  src={airbnbLogo} alt="airbnb logo"  className="nav__img"/>
        </nav>
    )
}