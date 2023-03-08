import { useContext } from 'react';
import AppContext from '../context/AppContext';

import Footer from "./Footer";
import Header from "./Header";

function Planets() {
    const { allPlanets } = useContext(AppContext);

    return (
        <div>
            <Header />
            <div>Head to your favorite Planet</div>
            <table className="table">
                <thead data-testid="table-head-planets">
                <tr>
                    <th>Name</th>
                    <th>Rotation Period</th>
                    <th>Orbital Period</th>
                    <th>Diameter</th>
                    <th>Climate</th>
                    <th>Gravity</th>
                    <th>Terrain</th>
                    <th>Surface Water</th>
                    <th>Population</th>
                    <th>Films</th>
                    <th>Created</th>
                    <th>Edited</th>
                </tr>
                </thead>
                <tbody data-testid="table-body-planets">
                {allPlanets.map((p) => (
                    <tr key={ p.name }>
                    <td>{ p.name }</td>
                    <td>{ p.rotation_period }</td>
                    <td>{ p.orbital_period }</td>
                    <td>{ p.diameter }</td>
                    <td>{ p.climate }</td>
                    <td>{ p.gravity }</td>
                    <td>{ p.terrain }</td>
                    <td>{ p.surface_water }</td>
                    <td>{ p.population }</td>
                    <td>{ p.films }</td>
                    <td>{ p.created }</td>
                    <td>{ p.edited }</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Footer />
        </div>
    );
  }
 
  export default Planets;