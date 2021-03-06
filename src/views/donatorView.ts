/* import Donator from '../models/Donator';  */

interface Donator {
  id: number,
  name: string,
  sex: string,
  phone_number: string,
  description: string,
  latitude: number,
  longitude: number,
  blood: {
    id: number,
    type_blood: string
  }
}


export default {
  render(donator: Donator){
    return {
        id: donator.id,
        name: donator.name,
        sex: donator.sex,
        phone_number: donator.phone_number,
        description: donator.description,
        latitude: Number(donator.latitude),
        longitude: Number(donator.longitude),
        blood: donator.blood.type_blood
    }
  },

  renderMany(donators: Donator[]){
    console.log(donators);

    return donators.map(donator => {
      return this.render(donator);
    })
  }
}