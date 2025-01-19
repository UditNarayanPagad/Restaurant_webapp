import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(@Inject('ORDER_SERVICE') private readonly client: ClientProxy) {}

  async placeOrder(orderDto: CreateOrderDto) {
    
    this.client.emit('order_created', orderDto);
  }
}