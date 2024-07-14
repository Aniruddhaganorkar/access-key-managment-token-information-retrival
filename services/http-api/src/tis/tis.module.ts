import { Module } from '@nestjs/common';
import { TisController } from './tis.controller';
import { NatsModule } from '@app/common/nats/nats.module';

@Module({
    imports: [NatsModule],
    controllers: [TisController],
    providers: [],
})
export class TisModule {}