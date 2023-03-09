import { useEffect, useMemo, useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import { fetchPeople, fetchPlanets, fetchStarships } from '../services/fetchAPI';

function AppProvider({ children }) {
  const [allPlanets, setAllPlanets] = useState([]);
  const [allPeople, setAllPeople] = useState([]);
  const [allStarships, setAllStarships] = useState([]);
  const [oneStarship, setOneStarships] = useState([]);

  useEffect(() => {
    fetchPlanets().then((result) => {
      setAllPlanets(result);
    });
    fetchPeople().then((result) => {
      setAllPeople(result);
    });
    fetchStarships().then((result) => {
      setAllStarships(result);
    });
  }, []);

  const values = useMemo(() => ({
    allPlanets,
    setAllPlanets,
    allPeople,
    setAllPeople,
    allStarships,
    setAllStarships,
    oneStarship,
    setOneStarships,
    
  }), [allPlanets,
    setAllPlanets,
    allPeople,
    setAllPeople,
    allStarships,
    setAllStarships,
    oneStarship,
    setOneStarships,]);

  return (
    <AppContext.Provider value={ values }>
      <div className="provider">
        {children}
      </div>
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: propTypes.element,
}.isRequired;

export default AppProvider;
