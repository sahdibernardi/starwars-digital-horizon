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
            <table className="table">
                <thead data-testid="table-head-people">
                    <tr>
                        <th>Name</th>
                        <th>Birth Year</th>
                        <th>Vehicles</th>
                        <th>Homeworld</th>
                    </tr>
                </thead>
                <tbody data-testid="table-body-people">
                {allPeople.map((p) => (
                    <tr key={ p.name }>
                        <td>{ p.name }</td>
                        <td>{ p.birth_year }</td>
                        <td onClick={ handleVehicleClick }>
                            <div>
                           { p.vehicles.concat(p.starships).map((s) => <button key={ s } name={ s }>{ s }</button>) }
                            </div>
                        </td>
                        <td>{ p.homeworld }</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>From Han Solo to Darth Vader, your favorite characters are here in /people</div>
            <Footer />
        </div>
    );
  }
  
  export default People;