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