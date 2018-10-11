import fetchResidents from './fetchResidents'
import fetchCall from './fetchCalls'

const fetchPlanets = async () => {
  const url = 'https://swapi.co/api/planets/'
  const data = await fetchCall(url);
  const withResidents = await this.fetchResidents(data.results);
  const cleanedPlanets = withResidents.map((planet) => {
    let planetObject = {
      name: planet.name,
      info: [
        {terrain: planet.terrain},
        {population: planet.population},
        {climate: planet.climate},
        {residents: planet.residents.join(', ')}
      ]
    }
    return planetObject
  });
}