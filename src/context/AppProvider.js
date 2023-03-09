import { useEffect, useMemo, useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import { fetchAllStarships, fetchAllVehicles, fetchPeople, fetchPlanets } from '../services/fetchAPI';

function AppProvider({ children }) {
  const [allPlanets, setAllPlanets] = useState([]);
  const [allPeople, setAllPeople] = useState([]);
  const [allStarships, setAllStarships] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);
  const [oneStarship, setOneStarship] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    fetchPlanets().then((result) => {
      setAllPlanets(result);
    });
    fetchPeople().then((result) => {
      setAllPeople(result);
    });
    fetchAllStarships().then((result) => {
      setAllStarships(result);
    });
    fetchAllVehicles().then((result) => {
      setAllVehicles(result);
      setIsLoading(false)
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
    setOneStarship,
    allVehicles,
    setAllVehicles,
    isLoading,
    setIsLoading,
    
  }), [allPlanets,
    setAllPlanets,
    allPeople,
    setAllPeople,
    allStarships,
    setAllStarships,
    oneStarship,
    setOneStarship,
    allVehicles,
    setAllVehicles,
    isLoading,
    setIsLoading,]);

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
