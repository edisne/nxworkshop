import { Injectable } from '@nestjs/common';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Widget } from 'apps/api/src/widgets/entities/widget.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WidgetsService {
  constructor(
    @InjectRepository(Widget) private widgetRepository: Repository<Widget>
  ) {}

  create(createWidgetDto: CreateWidgetDto) {
    const newUser = this.widgetRepository.create(createWidgetDto);
    return this.widgetRepository.save(newUser);
  }

  findAll() {
    return this.widgetRepository.find();
  }

  findOne(id: number) {
    return this.widgetRepository.findOne({ where: { id } });
  }

  update(id: number, updateWidgetDto: UpdateWidgetDto) {
    return this.widgetRepository.update(id, { ...updateWidgetDto });
  }

  remove(id: number) {
    return this.widgetRepository.delete(id);
  }
}
