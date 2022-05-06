import { useEffect, useState } from "react";

const useCars = ()=> {
const [cars, setCars] = useState([]);

useEffect(() => {
    // https://blooming-cliffs-05197.herokuapp.com/cars
    fetch('http://localhost:5000/cars')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCars(data)
        })
}, []);
return [cars, setCars]
}

export default useCars;