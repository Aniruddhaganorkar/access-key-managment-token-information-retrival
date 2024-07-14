import { Module } from '@nestjs/common';
import { TokenInfoController } from './token-info.controller';
import { TokenInfoService } from './token-info.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenInfo, TokenInfoSchema } from './schema/tis.schema';
import { TokenInfoRepository } from './token-info.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:password@tis_mongo_db:27017/token_info_service?retryWrites=true&writeConcern=majority&authSource=admin'),
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