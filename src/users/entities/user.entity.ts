import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryColumn()
  id: number;

  @Column({ length: 30 })
  email: string;

  @Column({ length: 30 })
  password: string;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 30 })
  profile: string;
}
