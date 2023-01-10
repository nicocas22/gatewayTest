import { PartialType } from '@nestjs/mapped-types';
import { userDTO } from './user.dto';

export class UpdateUserDto extends PartialType(userDTO) {}
