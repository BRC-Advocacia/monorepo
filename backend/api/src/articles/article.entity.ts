import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column('text')
  content: string;

  @Column({ nullable: true })
  coverImage?: string;
  @Column({ name: 'authorId', nullable: true })
  authorId: number;

  @ManyToOne(() => User, (user) => user.articles)
  // tipo um inner join pra linkar o artigo ao adv
  @JoinColumn({
    name: 'authorId',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_article_authorId'
  })
  author: User;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
