import fetchCall from './fetchCalls'

class People {
  constructor() {
    this.fetchCall = fetchCall
  }

  fetchPeople = async () => {
    const url = 'https://swapi.co/api/people/'
    const data = await this.fetchCall(url)
    const withHomeWorld = await this.fetchHomeWorld(data.results);
    const withSpecies = await this.fetchSpecies(withHomeWorld);
    return this.cleanPeople(withSpecies) 
  }

  cleanPeople = (people) => {
    return people.map((person) => {
      let personObject = {
        name: person.name,
        info: [
          {homeworld: person.homeworld},
          {language: person.language},
          {species: person.species},
          {population: person.population}
        ],
        favorite: false
      } 
      return personObject;
    });
  }

  fetchHomeWorld = async (people) => {
    const withHomeWorld = people.map(async (person) => {
      const world = await this.fetchCall(person.homeworld);
      person.homeworld = world.name;
      person.population = world.population;
      return person;
    });

    return Promise.all(withHomeWorld);
  }

  fetchSpecies = async (people) => {
    const withSpecies = people.map(async (person) =>  {
      const species = await this.fetchCall(person.species);
      person.species = species.name;
      person.language = species.language;
      return person;
    });

    return Promise.all(withSpecies)
  }
}



export default People;