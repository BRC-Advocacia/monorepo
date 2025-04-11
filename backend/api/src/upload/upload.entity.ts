import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('uploads')
export class Upload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  coverImage?: string;
}
