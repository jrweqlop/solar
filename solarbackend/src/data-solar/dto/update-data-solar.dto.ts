import { PartialType } from '@nestjs/swagger';
import { CreateDataSolarDto } from './create-data-solar.dto';

export class UpdateDataSolarDto extends PartialType(CreateDataSolarDto) {}
