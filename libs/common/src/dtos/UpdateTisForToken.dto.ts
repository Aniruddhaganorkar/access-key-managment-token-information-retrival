import { IsDateString, IsNumber, IsString, IsUUID, Length, Min } from 'class-validator';

export class UpdateTisForTokenDto {
  @IsString()
  @Length(4, 20)
  username: string;

  @IsUUID()
  accessKey: string;

  @IsNumber()
  @Min(1)
  requestCount: number;

  @IsDateString()
  lastAccessAt: Date;
}
