import { useContext } from 'react';
import AppContext from '../context/AppContext';

import Footer from "./Footer";
import Header from "./Header";

function People() {
    const { allPeople } = useContext(AppContext);

    return (
        <div>
            <Header />
            <table className="table">
                <thead data-testid="table-head-people">
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair Color</th>
                        <th>Skin Color</th>
                        <th>Gravity</th>
                        <th>Eye Color</th>
                        <th>Birth Year</th>
                        <th>Population</th>
                        <th>Films</th>
                        <th>Created</th>
                        <th>Edited</th>
                    </tr>
                </thead>
                <tbody data-testid="table-body-people">
                {allPeople.map((p) => (
                    <tr key={ p.name }>
                        <td>{ p.height }</td>
                        <td>{ p.mass }</td>
                        <td>{ p.hair_color }</td>
                        <td>{ p.skin_color }</td>
                        <td>{ p.eye_color }</td>
                        <td>{ p.birth_year }</td>
                        <td>{ p.gender }</td>
                        <td>{ p.homeworld }</td>
                        <td>{ p.films }</td>
                        <td>{ p.species }</td>
                        <td>{ p.vehicles }</td>
                        <td>{ p.starships }</td>
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