import { Module } from '@nestjs/common';
import { TokenInfoController } from './token-info.controller';
import { TokenInfoService } from './token-info.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenInfo, TokenInfoSchema } from './schema/tis.schema';
import { TokenInfoRepository } from './token-info.repository';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    MongooseModule.forFeature([
      {
        name: TokenInfo.name,
        schema: TokenInfoSchema,
      },
    ]),
  ],
  controllers: [TokenInfoController],
  providers: [TokenInfoService, TokenInfoRepository],
})
export class TokenInfoModule {}