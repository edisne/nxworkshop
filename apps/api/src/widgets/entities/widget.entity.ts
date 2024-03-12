import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'widgets' })
export class Widget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
