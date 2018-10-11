import fetchCall from './fetchCalls';

const fetchHomeWorld = async (people) => {
  const withHomeWorld = people.map(async (person) => {
    const world = await fetchCall(person.homeworld);
    person.homeworld = world.name;
    person.population = world.population;
    return person;
  });

  return Promise.all(withHomeWorld);
}

export default fetchHomeWorld;