import { useContext } from 'react';
import AppContext from '../context/AppContext';

import Footer from "./Footer";
import Header from "./Header";
import Loader from './Loader';

function Starships() {
    const { allStarships, isLoading } = useContext(AppContext);
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
                            <th>Model</th>
                            <th>Value in Credits</th>
                            <th>Length</th>
                            <th>Max Atmospheric Speed</th>
                            <th>Crew</th>
                            <th>Hyperdrive Rating</th>
                            <th>Starship Class</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div className="table-body">
                    <table>
                        <tbody data-testid="table-body">
                            {allStarships.map((p) => (
                                <tr key={ p.name }>
                                <td>{ p.name }</td>
                                    <td>{ p.model }</td>
                                    <td>{ p.cost_in_credits }</td>
                                    <td>{ p.length }</td>
                                    <td>{ p.max_atmosphering_speed }</td>
                                    <td>{ p.crew }</td>
                                    <td>{ p.hyperdrive_rating }</td>
                                    <td>{ p.starship_class }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
            )}
        </div>
    );
  }
  
  export default Starships;