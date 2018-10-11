import fetchCall from './fetchCalls'

const fetchVehicles = async () => {
  const url = 'https://swapi.co/api/vehicles/'
  const data = await fetchCall(url)
  const cleanData = data.results.map((vehicle) => {
    let vehicleObject = {
      name: vehicle.name,
      info: [
        {model: vehicle.model},
        {class: vehicle.vehicle_class},
        {passengers: vehicle.passengers}
      ]
    }
    return vehicleObject;
  })
  return cleanData
}

export default fetchVehicles;