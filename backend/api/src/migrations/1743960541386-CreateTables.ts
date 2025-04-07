import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1743960541386 implements MigrationInterface {
  name = 'CreateTables1743960541386';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create users table
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS \`user\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`username\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`fullname\` varchar(255) NOT NULL,
                \`oabnumber\` varchar(255) NOT NULL,
                \`entitlement\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`),
                UNIQUE KEY \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`)
            ) ENGINE=InnoDB
        `);

    // Create articles table
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS \`article\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`title\` varchar(255) NOT NULL,
                \`content\` text NOT NULL,
                \`coverImage\` varchar(255) NULL,
                \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                \`authorId\` int NULL,
                PRIMARY KEY (\`id\`),
                KEY \`FK_authorId\` (\`authorId\`),
                CONSTRAINT \`FK_authorId\` FOREIGN KEY (\`authorId\`) REFERENCES \`user\` (\`id\`) ON DELETE CASCADE
            ) ENGINE=InnoDB
        `);

    // Create uploads table
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS \`uploads\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`coverImage\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS \`uploads\``);
    await queryRunner.query(`DROP TABLE IF EXISTS \`article\``);
    await queryRunner.query(`DROP TABLE IF EXISTS \`user\``);
  }
}
