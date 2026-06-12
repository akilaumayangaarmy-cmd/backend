import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {

    const checkEmail = await this.findByEmail(createUserDto.email);

    if (checkEmail) {
      throw new ConflictException('Email already exists');
    }
    const checkNic = await this.userRepository.findOne({ where: { nic: createUserDto.nic } });

    if (checkNic) {
      throw new ConflictException('NIC already exists');
    }

    return await this.userRepository.save(createUserDto);
  }



  async findAll() {
    return await this.userRepository.find();
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  findOne(id: number) {
    // return this.userRepository.findOne({ where: { id: +id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
