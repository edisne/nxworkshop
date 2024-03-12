import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Widget } from 'apps/api/src/widgets/entities/widget.entity';
import { WidgetsModule } from 'apps/api/src/widgets/widgets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '5prstiju',
      database: 'nestdb',
      entities: [Widget],
      synchronize: true,
    }),
    WidgetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
