import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessKeyController } from './access-keys.controller';
import { AccessKeyService } from './access-keys.service';
import { AccessKeys } from './entities/access-keys.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'kms_pg_db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'key_manage_service',
      entities: [AccessKeys],
      synchronize: false // !(process.env.NODE_ENV.trim() === 'production'),
    }),
    TypeOrmModule.forFeature([AccessKeys]),
  ],
  controllers: [AccessKeyController],
  providers: [AccessKeyService],
})
export class AccessKeyModule {}