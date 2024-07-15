import { IsDateString, IsNumber, IsUUID, Min } from 'class-validator';

export class UpdateTisFromKmsDto {
  @IsUUID()
  userId: string;

  @IsNumber()
  @Min(1)
  reqPerMin: number;

  @IsDateString()
  keyExpireAt: Date;
}
