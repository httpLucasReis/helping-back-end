import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Donator1605147469740 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table (
            {
                name: 'donator',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'sex',
                        type: 'varchar'
                    },
                    {
                        name: 'phone_number',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'text'
                    }, 
                    {
                        name: 'blood_code',
                        type: 'integer'
                    },
                    {
                        name: 'latitude',
                        type: 'varchar'
                    },
                    {
                        name: 'longitude',
                        type: 'varchar'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'blood_code',
                        columnNames: ['blood_code'],
                        referencedTableName: 'bloods',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    }
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('donator');
    }

}
