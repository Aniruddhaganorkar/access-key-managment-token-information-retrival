import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessKeyController } from './access-keys.controller';
import { AccessKeyService } from './access-keys.service';
import { AccessKeys } from './entities/access-keys.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [AccessKeys],
      synchronize: false
    }),
    TypeOrmModule.forFeature([AccessKeys]),
  ],
  controllers: [AccessKeyController],
  providers: [AccessKeyService],
})
export class AccessKeyModule {}