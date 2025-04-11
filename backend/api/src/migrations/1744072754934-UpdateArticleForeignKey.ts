import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateArticleForeignKey1744072754934 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // First, check if there's an existing foreign key constraint and drop it
        const table = await queryRunner.getTable("article");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("authorId") !== -1);
        
        if (foreignKey) {
            await queryRunner.dropForeignKey("article", foreignKey);
        }
        
        // Create the new foreign key with our specified name
        await queryRunner.query(`
            ALTER TABLE article
            ADD CONSTRAINT FK_article_authorId
            FOREIGN KEY (authorId) REFERENCES user(id)
            ON DELETE SET NULL
            ON UPDATE CASCADE
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop the new foreign key in rollback
        await queryRunner.query(`ALTER TABLE article DROP FOREIGN KEY FK_article_authorId`);
        
        // Recreate the original foreign key if it existed
        await queryRunner.query(`
            ALTER TABLE article
            ADD CONSTRAINT FK_authorId
            FOREIGN KEY (authorId) REFERENCES user(id)
        `);
    }

}
