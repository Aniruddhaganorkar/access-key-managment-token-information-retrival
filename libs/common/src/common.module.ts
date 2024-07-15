import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { NatsModule } from './nats/nats.module';

@Module({
  imports: [NatsModule],
  providers: [CommonService],
  exports: [CommonService, NatsModule],
})
export class CommonModule {}
