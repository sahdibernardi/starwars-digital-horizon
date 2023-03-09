import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import { fetchOneStarship } from '../services/fetchAPI';
import Loader from './Loader';

function People() {
    const { allPeople, setOneStarship, allStarships, allVehicles, isLoading } = useContext(AppContext);
    const history = useHistory();

    const handleVehicleClick = async ({ target }) => {
        const { name } = target;
        const starshipData = await fetchOneStarship(name);
        setOneStarship(starshipData);
        history.push('/each-starship');
    };

    const searchVehicleName = (endpoint) => {
        if(endpoint.match(/starships/)){
            const filteredS = allStarships.find((s) => s.url === endpoint);
            if(filteredS) {
                return(filteredS.name)
            } return(undefined);
        }
        if(endpoint.match(/vehicles/)){
            const filteredV = allVehicles.find((v) => v.url === endpoint);
            if(filteredV) {
                return(filteredV.name)
            } else return(undefined);
        }
        if(!endpoint) {
            return (undefined);
        }
    };

    return (
        <div>
            <Header />
            {( isLoading ? 
                <Loader /> :
            <div>
                <div className="table">
                    <div className="table-header">
                        <table>
                            <thead data-testid="table-header">
                            <tr>
                                <th>Name</th>
                                <th>Birth Year</th>
                                <th>Vehicles</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="table-body">
                        <table>
                            <tbody data-testid="table-body">
                                {allPeople.map((p) => (
                                    <tr key={ p.name }>
                                        <td>{ p.name }</td>
                                        <td>{ p.birth_year }</td>
                                        <td onClick={ handleVehicleClick }>
                                            <div>
                                        { p.vehicles.concat(p.starships).map((s) => <button key={ s } name={ s } className="starships-button">{ searchVehicleName(s) }</button>) }
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer />
            </div>
            )}
        </div>
    );
  }
  
  export default People;