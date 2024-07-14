import { Module } from '@nestjs/common';
import { KmsController } from './kms.controller';
import { NatsModule } from '@app/common/nats/nats.module';

@Module({
    imports: [NatsModule],
    controllers: [KmsController],
    providers: [],
})
export class KmsModule {}