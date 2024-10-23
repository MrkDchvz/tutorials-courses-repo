import "./Main.css"
import reactLogo from '../assets/react.svg'


export default function Main() {
     return (
        <main className="main">
            <h1 className="Title">Fun Facts About React</h1>
            <ul className="main-list">
                <li className="main-list__items">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, similique!</li>
                <li className="main-list__items">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, rerum.</li>
                <li className="main-list__items">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                <li className="main-list__items">Lorem.</li>
                <li className="main-list__items">Lorem ipsum dolor sit amet.</li>
            </ul>
            <img src={reactLogo} className="logo-bg"></img>
        </main>
     )
}