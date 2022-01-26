import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { MySQL } from 'fxsql';

const { CONNECT } = MySQL;
const POOL = CONNECT({
  host: 'miniter-project-db.cld3omwfpuvc.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  user: 'root',
  password: 'test1234',
  database: 'miniter',
});

const { QUERY, COLUMN, VALUES, TABLE, EQ, SET } = POOL;

@Injectable()
export class UserRepository {
  table: string;

  constructor() {
    this.table = 'users';
  }

  async create(createUserDto: CreateUserDto) {
    const res = await QUERY`INSERT INTO ${TABLE(this.table)}
      ${VALUES(createUserDto)}`;
    return { _id: res.insertId, ...createUserDto };
  }

  async findAll() {
    const columns = '*';
    return await QUERY`
      SELECT ${COLUMN(...columns)}
      FROM ${TABLE(this.table)} 
      `;
  }

  async findOne(id: number) {
    const columns = '*';
    return (
      await QUERY`
      SELECT ${COLUMN(...columns)}
      FROM ${TABLE(this.table)} 
      WHERE ${EQ({ _id: id })}
      `
    )[0];
  }

  async update(id: number, updateUserDto: any) {
    await QUERY` UPDATE ${TABLE(this.table)} ${SET(updateUserDto)} WHERE ${EQ({
      _id: id,
    })} `;
    return this.findOne(id);
  }

  async remove(pk: number) {
    const conditions = {
      _id: pk,
    };
    await QUERY`
      DELETE FROM ${TABLE(this.table)}
      WHERE ${EQ(conditions)}
    `;
  }
}
