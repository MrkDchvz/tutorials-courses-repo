import photoGrid from "../assets/photo-grid.png"
import "./Hero.css" 
export default function Hero() {
    return (
        <section className="main">
            <section className="hero"><img src={photoGrid} alt="hero image" className="hero__img"/></section>

            <section className="header">
                <h1 className="header__title">Online Experiences</h1>
                <p className="header__sub-title">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </section>
    )
}