import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class OrdersConsumer {
  @EventPattern('order_created')
  async handleOrderCreated(data: Record<string, unknown>) {
    
    console.log('Order received:', data);
  }
}