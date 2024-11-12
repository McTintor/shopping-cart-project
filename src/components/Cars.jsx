import Car from "./Car";
import './Cars.css'
import { DUMMY_CARS } from '../DUMMY_CARS'


export default function Cars() {
    return (
        <>
            <div className="cars-container">
                <ul>
                    {DUMMY_CARS.map((car) => (
                        <li key={car.id}>
                            <Car
                                id={car.id}
                                title={car.title}
                                year={car.year}
                                mileage={car.mileage}
                                price={car.price}
                                description={car.description}
                                url={car.url}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
