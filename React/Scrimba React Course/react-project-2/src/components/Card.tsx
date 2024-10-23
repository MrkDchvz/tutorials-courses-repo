import "./Card.css"
import starIcon from "../assets/star.png"
interface Props {
    status? : string
    imgLink : string,
    ratings : number,
    location : string,
    reviewCount : number,
    description : string,
    pricing : number

}

export default function CardComponent({status, imgLink, ratings, reviewCount, description, pricing, location}: Props) {
    return (
        <div className="card">
            <img className="card__image" src={imgLink} alt="" />
            <p className="card__availability" style ={{display : status ? "block" : "none"}}>{status}</p>
            <section className="card__stats">
                <img  className="card__stats__star" src= {starIcon} alt="" />
                <span className="card__stats__rating"> {ratings} </span>
                <span className="card__stats__review-count">({reviewCount}) • </span>
                <span className="card__stats__location">{location}</span>
            </section>
            <p className="card__description">{description}</p>
            <p className="card__pricing"><span className="strong">From ${pricing}</span> / person</p>
            
        </div>
    )
}
