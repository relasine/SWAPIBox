import fetchCall from './fetchCalls'

class Vehicles {
  constructor() {
    this.fetchCall = fetchCall
  }

  fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/'
    const data = await this.fetchCall(url)
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
        ],
        favorite: false
      }
      return vehicleObject;
    })
  }
}


export default Vehicles;