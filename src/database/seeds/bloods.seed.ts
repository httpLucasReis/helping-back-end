import { Factory, Seeder } from "typeorm-seeding";
import { Connection, getConnection } from "typeorm"
import Bloods from '../../models/Bloods';

export default class CreateBloods implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .delete()
      .from(Bloods)
      .insert()
      .into(Bloods)
      .values([
        {
          type_blood: "A+"
        },
        {
          type_blood: "A-"
        },
        {
          type_blood: "B+"
        },
        {
          type_blood: "B-"
        },
        {
          type_blood: "AB+"
        },
        {
          type_blood: "AB-"
        },
        {
          type_blood: "O+"
        },
        {
          type_blood: "O-"
        }
      ])
      .execute()
  }
}


