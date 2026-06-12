import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register-dto';
import { User } from 'src/users/entities/user.entity';
import bcrypt from 'node_modules/bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string): Promise<User | null> {

        const user = await this.userService.findByEmail(email);

        if (!user) {
            return null;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return null;
        }

        return user;

    }

    async registerUser(registerDto: RegisterDto) {

        const checkEmail = await this.userService.findByEmail(registerDto.email);
        if (checkEmail) {
            throw new ConflictException('Email already exists');
        }

        const checkNic = await this.userService.findByNic(registerDto.nic);
        if (checkNic) {
            throw new ConflictException('NIC already exists');
        }

        const hashPassword = await bcrypt.hash(registerDto.password, 10);
        registerDto.password = hashPassword;

        return await this.userService.registerUser(registerDto);
    }

    async login(user: User) {

        const payload = { username: user.email, sub: user.id };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
