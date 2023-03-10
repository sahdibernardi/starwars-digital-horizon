import { useContext } from 'react';
import AppContext from '../context/AppContext';

import Footer from "./Footer";
import Header from "./Header";
import Loader from './Loader';

function Planets() {
    const { allPlanets, isLoading } = useContext(AppContext);

    return (
        <div>
            <Header />
            {( isLoading ? 
                <Loader /> :
            <div className="table">
                <div className="table-header">
                    <table>
                        <thead data-testid="table-header">
                        <tr>
                            <th>Name</th>
                            <th>Terrain</th>
                            <th>Diameter</th>
                            <th>Climate</th>
                            <th>Gravity</th>
                            <th>Surface Water</th>
                            <th>Population</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div className="table-body">
                    <table>
                        <tbody data-testid="table-body">
                        {allPlanets.map((p) => (
                            <tr key={ p.name }>
                            <td>{ p.name }</td>
                            <td>{ p.terrain }</td>
                            <td>{ p.diameter }</td>
                            <td>{ p.climate }</td>
                            <td>{ p.gravity }</td>
                            <td>{ p.surface_water }</td>
                            <td>{ p.population }</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                <Footer />
                </div>
            </div>
            )}
        </div>
    );
  }
 
  export default Planets;