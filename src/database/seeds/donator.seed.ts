import { Factory, Seeder } from "typeorm-seeding";
import { Connection, getConnection } from "typeorm"
import Donator from '../../models/Donator'

export default class CreateDonantor implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const donatorsRepository = await getConnection().getRepository(Donator)
    await donatorsRepository.clear()
    
    await factory(Donator)().createMany(5)
  }
}