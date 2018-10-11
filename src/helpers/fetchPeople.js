import fetchCall from './fetchCalls'

const fetchPeople = async () => {
  const url = 'https://swapi.co/api/people/'
  const data = await fetchCall(url)
  const withHomeWorld = await fetchHomeWorld(data.results);
  const withSpecies = await fetchSpecies(withHomeWorld);
  return cleanPeople(withSpecies) 
}

const cleanPeople = (people) => {
  return people.map((person) => {
    let personObject = {
      name: person.name,
      info: [
        {homeworld: person.homeworld},
        {language: person.language},
        {species: person.species},
        {population: person.population}
      ]
    } 
    return personObject;
  });
}

const fetchHomeWorld = async (people) => {
  const withHomeWorld = people.map(async (person) => {
    const world = await fetchCall(person.homeworld);
    person.homeworld = world.name;
    person.population = world.population;
    return person;
  });

  return Promise.all(withHomeWorld);
}

const fetchSpecies = async (people) => {
  const withSpecies = people.map(async (person) =>  {
    const species = await fetchCall(person.species);
    person.species = species.name;
    person.language = species.language;
    return person;
  });

  return Promise.all(withSpecies)
}

export default fetchPeople;