import fetchCall from './fetchCalls'

const fetchVehicles = async () => {
  const url = 'https://swapi.co/api/vehicles/'
  const data = await fetchCall(url)
  const cleanData = cleanVehicles(data)
  return cleanData
}

const cleanVehicles = (vehicles) => {
  return vehicles.results.map((vehicle) => {
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
}

export default fetchVehicles;