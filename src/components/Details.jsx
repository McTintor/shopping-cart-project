import { useParams } from "react-router"
import { DUMMY_CARS } from "../DUMMY_CARS";
import './Details.css'
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

export default function Details () {

    const dispatch = useDispatch();
    const { id } = useParams();

    const car = DUMMY_CARS.find(car => car.id === parseInt(id));

    if (!car) {
        return <h2>Car not found</h2>;
    }

    const handleAdd = () => {
        dispatch(cartActions.increment({
            id: car.id, 
            price: car.price,  
            title: car.title, 
            totalPrice: car.price, 
            url: car.url
        }))
    }
    
    return (
        <>
            <div className="car-details-container">
                <h2>{car.title}</h2>
                <img src={car.url} alt={`${car.title}`} />
                <div className="details-car-info">
                    <p>Year: {car.year}</p>
                    <p>Mileage: {car.mileage}km</p>
                </div>
                <p className='details-description'>
                    {car.description}
                    </p>
                <div className="details-button-div">
                    <p>Price: {car.price}€</p>
                    <button onClick={handleAdd} className="add">Add to Cart</button>
                </div>
            </div>
        </>
    )
}