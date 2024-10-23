import reactLogo from '../assets/react.svg'
import "./Navbar.css"

export default function NavBar() {
    return (
        <nav className="nav">
            <div className="nav-logo"><img src={reactLogo} alt="React Logo" /> <span className="logo-title">ReactFacts</span></div>
            <p className="nav-info">React Course - Project 1</p>
        </nav>
    )
}