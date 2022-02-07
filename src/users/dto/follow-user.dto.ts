import { ApiProperty } from "@nestjs/swagger";

export class FollowUserDto {
  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly userIdToFollow: number;
}
