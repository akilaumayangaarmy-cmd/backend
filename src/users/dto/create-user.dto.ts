import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(20) 
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    lastName: string;


    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    nic: string;

    // @IsNotEmpty()
    // @IsString()
    // @MaxLength(15)
    // contactNumber: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    role: string;
 
}
