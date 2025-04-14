import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddLawyerPhotoToUser1744512698528 implements MigrationInterface {
  name = 'AddLawyerPhotoToUser1744512698528';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`lawyerPhoto\` varchar(255) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`lawyerPhoto\``);
  }
}
