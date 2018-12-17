import { Product } from './Product';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  MinKey,
  ManyToMany
} from 'typeorm';
import { Length, IsEmail, Allow, IsDefined } from 'class-validator';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  @IsDefined({
    groups: ['requireId']
  })
  id: number;

  @Column('text')
  @Length(4, 50)
  name: string;

  @Length(5, 255)
  @Column('text')
  image: string;

  @ManyToMany(() => Product, product => product.categories)
  products: Product[];
}