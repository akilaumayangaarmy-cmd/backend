import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto) {
    const appointment = this.appointmentRepository.create(createAppointmentDto);
    return await this.appointmentRepository.save(appointment);
  }

//   async findAll() {
//     return await this.appointmentRepository.find({ relations: ['user'] });
//   }

//   async findOne(id: string) {
//     return await this.appointmentRepository.findOne({
//       where: { id },
//       relations: ['user'],
//     });
//   }

//   async findByUserId(userId: string) {
//     return await this.appointmentRepository.find({
//       where: { userId },
//       relations: ['user'],
//     });
//   }

//   async update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
//     await this.appointmentRepository.update(id, updateAppointmentDto);
//     return await this.findOne(id);
//   }

//   async remove(id: string) {
//     return await this.appointmentRepository.delete(id);
//   }
}
