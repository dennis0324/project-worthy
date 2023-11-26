import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateDatabase1700954373367 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createDatabase("electric",true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropDatabase("electric",true);
    }

}
