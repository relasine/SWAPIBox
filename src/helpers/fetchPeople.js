import fetchHomeWorld from './fetchHomeworld'
import fetchSpecies from './fetchSpecies'
import fetchCall from './fetchCalls'

const fetchPeople = async () => {
  const url = 'https://swapi.co/api/people/'
  const data = await fetchCall(url)
  const withHomeWorld = await this.fetchHomeWorld(data.results);
  const withSpecies = await this.fetchSpecies(withHomeWorld);
  const cleanedPeople = withSpecies.map((person) => {
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
  return cleanedPeople
}

export default fetchPeople;