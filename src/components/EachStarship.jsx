// import { useContext } from 'react';
// import AppContext from '../context/AppContext';
// import { fetchOneStarship } from '../services/fetchAPI';

import { useContext } from 'react';
import AppContext from '../context/AppContext';

import Footer from "./Footer";
import Header from "./Header";
import Loader from './Loader';

function EachStarship() {
    const { oneStarship, isLoading } = useContext(AppContext);
    return (
        <div>
            <Header />
            {( isLoading ? 
                <Loader /> :
            <div>
                <h3>{ oneStarship.name }</h3>
                <div className="table">
                    <div className="table-header">
                        <table>
                            <thead data-testid="table-header">
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
                        </table>
                    </div>
                    <div className="table-body-eachStarship">
                        <table>
                            <tbody data-testid="table-body">
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
                    </div>
                </div>
                <Footer /> 
            </div>
            )}
        </div>
    );
  }
  
  export default EachStarship;