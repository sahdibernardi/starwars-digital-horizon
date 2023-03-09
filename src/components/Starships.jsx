import { useContext } from 'react';
import AppContext from '../context/AppContext';

import Footer from "./Footer";
import Header from "./Header";

function Starships() {
    const { allPlanets } = useContext(AppContext);
    return (
        <div>
            <Header />
            <div>Find your starship</div>
            <table className="table">
                <thead data-testid="table-head-starships">
                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Value in Credits</th>
                        <th>Length</th>
                        <th>Max Atmospheric Speed</th>
                        <th>Crew</th>
                        <th>Hiperdrive Rating</th>
                        <th>Starship Class</th>
                    </tr>
                </thead>
                <tbody data-testid="table-body-starships">
                {allPlanets.map((p) => (
                    <tr key={ p.name }>
                    <td>{ p.name }</td>
                        <td>{ p.model }</td>
                        <td>{ p.cost_in_credits }</td>
                        <td>{ p.length }</td>
                        <td>{ p.max_atmosphering_speed }</td>
                        <td>{ p.crew }</td>
                        <td>{ p.hiperdrive_rating }</td>
                        <td>{ p.starship_class }</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Footer />
        </div>
    );
  }
  
  export default Starships;