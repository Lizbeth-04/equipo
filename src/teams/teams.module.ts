import { Module } from '@nestjs/common';
import { TeamService } from './teams.service'; 
import { TeamController } from './teams.controller'; 
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TeamController], 
  providers: [TeamService, PrismaService],
})
export class EquipoModule {}
