import * as Faker from 'faker'
import { define } from 'typeorm-seeding'
import Donator from '../../models/Donator'

define(Donator, (faker: typeof Faker) => { 
  faker.locale = "pt_BR"

  const gender = faker.random.number(1)
  const firstName = faker.name.firstName(gender)
  const lastName = faker.name.lastName(gender)
  const random_number = faker.random.number(9)
  const blood_code = random_number === 0? random_number + 1 : random_number
  const phone_number = faker.phone.phoneNumberFormat()

  const donator = new Donator()
  donator.name = `${firstName} ${lastName}`
  donator.blood_code = blood_code
  donator.description = "Olá, eu sou um doador"
  donator.phone_number = phone_number
  donator.sex = gender == 0? 'Masculino' : "Feminino"
  donator.latitude = Number((Math.random() * (100 - 2000) + 2000).toFixed(3))
  donator.longitude = Number((Math.random() * (100 - 2000) + 2000).toFixed(3))

  return donator
})
  
  
  
  
  
  
  
  
  
  

