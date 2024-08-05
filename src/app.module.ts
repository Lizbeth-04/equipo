import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipoModule } from './teams/teams.module';

@Module({
  imports: [EquipoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
