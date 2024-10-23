import data from "../cardData.json"
import CardComponent from '../components/Card'
import "./CardContainer.css"
export default function CardContainer() {
    return (
        <section className="card-container">
            {data.map((item, index) => {
          const {status, imgLink, ratings, location, reviewCount, description, pricing} = item;
          return (
            <CardComponent
          key = {index}
          status = {status}
          imgLink= {imgLink}
          ratings = {ratings}
          location = {location}
          reviewCount = {reviewCount}
          description =  {description}
          pricing = {pricing}
        />
          )
        })}
        </section>
    )
}