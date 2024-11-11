/* eslint-disable react/prop-types */

import './Car.css'
import { useNavigate } from 'react-router-dom';

export default function Car ({ id, title, year, mileage, price, description, url }) {
    
    
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`details/${id}`)
    }
    
    return (
        <>
            <div className="car-card">
                <h2>{title}</h2>
                <img className='car-img' src={url} alt={`${title}`} />
                <div className="car-info">
                    <p>Year: {year}</p>
                    <p>Mileage: {mileage}km</p>
                </div>
                <p className='description'>
                    {description}
                    <button className='details' onClick={handleNavigate}>...Click here for more details</button>
                    </p>
                <div className="car-button">
                    <p>Price: {price}€</p>
                    <button className='add'>Add to Cart</button>
                </div>
            </div>
        </>
    )
}