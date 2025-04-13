import { MigrationInterface, QueryRunner } from "typeorm";
export class AddSubtitleColumn1744574929187 implements MigrationInterface {
    name = 'AddSubtitleColumn1744574929187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`article\` ADD \`subtitle\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`article\` DROP COLUMN \`subtitle\``);
    }

}
