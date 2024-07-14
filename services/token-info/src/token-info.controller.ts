import { Controller, Get, Inject } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { TokenInfoService } from './token-info.service';
import { CreateTisDto, GetTokenDto, UpdateTisFromKmsDto } from "@app/common/dtos/index";

@Controller()
export class TokenInfoController {
  constructor(
    private readonly tokenInfoServiceService: TokenInfoService
  ) {}

  @MessagePattern({ cmd: 'getTokenInfo' })
  async getTokenInfo(@Payload() getTokenReq: GetTokenDto) {
    return await this.tokenInfoServiceService.getTokenInfo(getTokenReq);
  }

  @EventPattern('onUserCreated')
  onUserCreated(@Payload() user: CreateTisDto) {
      return this.tokenInfoServiceService.createTis(user);
  }

  @EventPattern('onUserUpdated')
  onUserUpdated(@Payload() user: UpdateTisFromKmsDto) {
      return this.tokenInfoServiceService.updateTis(user.userId, user);
  }

  @EventPattern('onUserDeleted')
  onUserDeleed(@Payload() userId: string) {
      return this.tokenInfoServiceService.deleteTis(userId);
  }

}