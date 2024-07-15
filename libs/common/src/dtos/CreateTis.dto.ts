import { IsDateString, IsNumber, IsString, IsUUID, Length, Min } from 'class-validator';

export class CreateTisDto {
  @IsUUID()
  userId: string;

  @IsString()
  @Length(4, 20)
  username: string;

  @IsUUID()
  accessKey: string;

  @IsNumber()
  @Min(1)
  reqPerMin: number;

  @IsDateString()
  keyExpireAt: Date;
}
