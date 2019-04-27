import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from '.';
import { Product } from './Product';

@Entity()
export class OrderProduct {
  @PrimaryColumn()
  orderId: number;

  @PrimaryColumn()
  productId: number;

  @ManyToOne(() => Order, o => o.products)
  order: Order;

  @ManyToOne(() => Product)
  product: Product;

  @Column('integer')
  quantity: number;
}
