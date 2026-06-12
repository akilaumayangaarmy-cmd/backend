import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateAppointmentDto {
    
  @IsNotEmpty()
  appointmentDate: Date;

  status?: string;

  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
