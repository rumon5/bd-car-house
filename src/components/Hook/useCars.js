import { useEffect, useState } from "react";

const useCars = ()=> {
const [cars, setCars] = useState([]);

useEffect(() => {
    fetch('https://blooming-cliffs-05197.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCars(data)
        })
}, []);
return [cars, setCars]
}

export default useCars;