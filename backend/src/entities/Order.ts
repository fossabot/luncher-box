import { Allow, IsOptional, Length } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EntityError, OrderState } from '../types';
import { EntityNotFoundError, EntityNotValidError } from '../utils';
import { Table } from './';
import { OrderProduct } from './OrderProducts';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Table, t => t.orders, {
    cascade: ['remove'],
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  @Allow()
  table: Table;

  @OneToMany(() => OrderProduct, op => op.order, {
    cascade: ['insert']
  })
  @Allow()
  products: OrderProduct[];

  @Column('text')
  customerId: string;

  @Column('text')
  @Length(0, 255)
  @IsOptional()
  comment: string = '';

  @Column('integer')
  state: OrderState;

  @Column()
  placed: Date;

  @Column({
    nullable: true
  })
  accepted: Date;

  @Column({
    nullable: true
  })
  declined: Date;

  @Column({
    nullable: true
  })
  finished: Date;
}

export class OrderNotFoundError extends EntityNotFoundError<Order> {
  constructor() {
    super('Order');
  }
}

export class OrderNotValidError extends EntityNotValidError<Order> {
  constructor(errors: EntityError) {
    super('Order', errors);
  }
}
