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

export const fetchOneStarship = async (endpoint) => {
  try {
    const starshipFetch = await fetch(endpoint);
    const result = await starshipFetch.json();
    return(result);
  } catch (error) {
    console.error(error);
    return('does not owe a vehicle');
  }
};

export const fetchAllStarships = async () => {
  try {
    const endpoint1 = 'https://swapi.dev/api/starships/';
    const endpoint2 = 'https://swapi.dev/api/starships/?page=2';
    const endpoint3 = 'https://swapi.dev/api/starships/?page=3';
    const endpoint4 = 'https://swapi.dev/api/starships/?page=4';
    const page1 = await fetch(endpoint1);
    const page2 = await fetch(endpoint2);
    const page3 = await fetch(endpoint3);
    const page4 = await fetch(endpoint4);
    const result1 = await page1.json();
    const result2 = await page2.json();
    const result3 = await page3.json();
    const result4 = await page4.json();
    const finalArray = (result1.results).concat((result2.results), (result3.results), (result4.results));
    return finalArray;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllVehicles = async () => {
  try {
    const endpoint1 = 'https://swapi.dev/api/vehicles/';
    const endpoint2 = 'https://swapi.dev/api/vehicles/?page=2';
    const endpoint3 = 'https://swapi.dev/api/vehicles/?page=3';
    const endpoint4 = 'https://swapi.dev/api/vehicles/?page=4';
    const page1 = await fetch(endpoint1);
    const page2 = await fetch(endpoint2);
    const page3 = await fetch(endpoint3);
    const page4 = await fetch(endpoint4);
    const result1 = await page1.json();
    const result2 = await page2.json();
    const result3 = await page3.json();
    const result4 = await page4.json();
    const finalArray = (result1.results).concat((result2.results), (result3.results), (result4.results));
    return finalArray;
  } catch (error) {
    console.error(error);
  }
};