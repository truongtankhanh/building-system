import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateLocationDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly location_name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly location_number: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly area: number;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly building_id: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  readonly parent_location?: string | null;
}
