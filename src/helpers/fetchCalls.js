const fetchCall = async (url) => {
    // const url = `https://swapi.co/api/${selection}/`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default fetchCall;