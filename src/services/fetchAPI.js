import { useContext } from 'react';
import AppContext from '../context/AppContext';

export const fetchPlanets = async () => {
  try {
    const endpoint = 'https://swapi.dev/api/planets';
    const planetsFetch = await fetch(endpoint);
    const result = await planetsFetch.json();
    const planetsArray = result.results;
    return planetsArray;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPeople = async () => {
  try {
    const endpoint = 'https://swapi.dev/api/people';
    const peopleFetch = await fetch(endpoint);
    const result = await peopleFetch.json();
    const peopleArray = result.results;
    return peopleArray;
  } catch (error) {
    console.error(error);
  }
};

export const fetchStarships = async () => {
  try {
    const endpoint = 'https://swapi.dev/api/starships';
    const starshipFetch = await fetch(endpoint);
    const result = await starshipFetch.json();
    const starshipArray = result.results;
    return starshipArray;
  } catch (error) {
    console.error(error);
  }
};

export const fetchOneStarship = async (endpoint) => {
  const { setOneStarship } = useContext(AppContext);
  try {
    const starshipFetch = await fetch(endpoint);
    const result = await starshipFetch.json();
    const starshipArray = result.results;
    setOneStarship(starshipArray);
  } catch (error) {
    console.error(error);
  }
};