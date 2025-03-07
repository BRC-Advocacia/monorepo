import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.usersRepository.create(user);
    const hashPassword = await bcrypt.hash(user.password, 10);

    return await this.usersRepository.save({ ...newUser, password: hashPassword});
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { username } });
  }
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
}
