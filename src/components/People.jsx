import { useContext } from 'react';
import AppContext from '../context/AppContext';

import Footer from "./Footer";
import Header from "./Header";

function People() {
    const { allPeople } = useContext(AppContext);

    const handleVehicleClick = ({ target }) => {
        // code
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
                        <td onClick={ handleVehicleClick }>{ p.vehicles + p.starships  }</td>
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