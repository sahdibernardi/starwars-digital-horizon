// import { useContext } from 'react';
// import AppContext from '../context/AppContext';
// import { fetchOneStarship } from '../services/fetchAPI';

import { useContext } from 'react';
import AppContext from '../context/AppContext';

import Footer from "./Footer";
import Header from "./Header";

function EachStarship() {
    const { oneStarship } = useContext(AppContext);
    return (
        <div>
            <Header />
            <h3>{ oneStarship.name }</h3>

            <table className="table">
                <thead data-testid="table-head-eachstarships">
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
                <tbody data-testid="table-body-eachstarship">
                    <tr>
                    <td>{ oneStarship.name }</td>
                        <td>{ oneStarship.model }</td>
                        <td>{ oneStarship.cost_in_credits }</td>
                        <td>{ oneStarship.length }</td>
                        <td>{ oneStarship.max_atmosphering_speed }</td>
                        <td>{ oneStarship.crew }</td>
                        <td>{ oneStarship.hiperdrive_rating }</td>
                        <td>{ oneStarship.starship_class }</td>
                    </tr>
                </tbody>
            </table>
            <Footer /> 
        </div>
    );
  }
  
  export default EachStarship;