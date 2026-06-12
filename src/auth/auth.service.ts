import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register-dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) { }


    async registerUser(registerDto: RegisterDto) {

        const checkEmail = await this.userService.findByEmail(registerDto.email);

        if (checkEmail) {
            throw new ConflictException('Email already exists');
        }

        const checkNic = await this.userService.findByNic(registerDto.nic);

        if (checkNic) {
            throw new ConflictException('NIC already exists');
        }

        return await this.userService.registerUser(registerDto);
    }

}
