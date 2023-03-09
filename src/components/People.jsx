import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import { fetchOneStarship } from '../services/fetchAPI';

function People() {
    const { allPeople, setOneStarship } = useContext(AppContext);
    const history = useHistory();

    const handleVehicleClick = async ({ target }) => {
        const { name } = target;
        const starshipData = await fetchOneStarship(name);
        setOneStarship(starshipData);
        history.push('/each-starship');
    };

    return (
        <div>
            <Header />
            <div className="table">
                <div className="table-header">
                    <table>
                        <thead data-testid="table-header">
                        <tr>
                            <th>Name</th>
                            <th>Birth Year</th>
                            <th>Vehicles</th>
                            <th>Homeworld</th>
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
                                    { p.vehicles.concat(p.starships).map((s) => <button key={ s } name={ s } className="starships-button">{ s }</button>) }
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" name={ p.homeworld }>
                                        { p.homeworld }
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
  
  export default People;