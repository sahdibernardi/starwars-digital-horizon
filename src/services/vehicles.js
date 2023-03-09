// import { fetchOneStarship } from "./fetchAPI";


export const vehicles = async (p) => {
    
    const vehicles = (p.vehicles);
    const starships = (p.starships);
    const finalArray = vehicles.concat(starships);

    finalArray.map((s) => {
        return(
            <div key={ s }>{s}</div>
        )
    })
}


export const extractID = (endpoint) => {
    const id = endpoint.replace(/\D/g, '');
    console.log(id);
    // filter starship and vehicles array and return the name.
}
