import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    example: 'aaa@bbb.com',
    description: 'email',
    required: true,
  })
  readonly email: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly profile: string;
}
