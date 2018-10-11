import fetchCall from './fetchCalls';

const fetchSpecies = async (people) => {
  const withSpecies = people.map(async (person) =>  {
    const species = await fetchCall(person.species);
    person.species = species.name;
    person.language = species.language;
    return person;
  });

  return Promise.all(withSpecies)
}

export default fetchSpecies;