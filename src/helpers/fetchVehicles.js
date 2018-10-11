import fetchCall from './fetchCalls'

class FetchVehicles {
  constructor() {

  }

  fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/'
    const data = await fetchCall(url)
    const cleanData = this.cleanVehicles(data)
    return cleanData
  }

  cleanVehicles = (vehicles) => {
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
}


export default FetchVehicles;