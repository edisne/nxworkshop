import { Module } from '@nestjs/common';
import { WidgetsService } from './widgets.service';
import { WidgetsController } from './widgets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Widget } from 'apps/api/src/widgets/entities/widget.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Widget])],
  controllers: [WidgetsController],
  providers: [WidgetsService],
})
export class WidgetsModule {}
