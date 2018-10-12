import fetchCall from './fetchCalls'

class Planets {
  constructor() {
    this.fetchCall = fetchCall
  }

  fetchPlanets = async () => {
    const url = 'https://swapi.co/api/planets/'
    const data = await this.fetchCall(url);
    const withResidents = await this.fetchResidents(data.results);
    const cleanedPlanets = this.cleanPlanets(withResidents)
    return cleanedPlanets
  }

  cleanPlanets = (planets) => {
    return planets.map((planet) => {
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

  fetchResidents = (planets) => {
    const withResidents = planets.map( async (planet) => {
      const planetResidents = planet.residents.map( async (resident) => {
        const residentData = await this.fetchCall(resident);
        return residentData.name
      })
      const names = await Promise.all(planetResidents);

      if (names.length >= 1) {
        planet.residents = names
      } else {
        planet.residents = ['none']
      }

      return planet
    })
    return Promise.all(withResidents)
  }
}


export default Planets;