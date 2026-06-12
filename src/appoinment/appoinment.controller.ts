import { Controller } from '@nestjs/common';
import { AppoinmentService } from './appoinment.service';

@Controller('appoinment')
export class AppoinmentController {
  constructor(private readonly appoinmentService: AppoinmentService) {}
}
