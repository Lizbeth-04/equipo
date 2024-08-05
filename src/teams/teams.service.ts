import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Equipo } from '@prisma/client'; // Usa 'Equipo' si has ajustado el esquema

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.EquipoCreateInput): Promise<Equipo> { // Cambié 'TeamCreateInput' a 'EquipoCreateInput'
    return this.prisma.equipo.create({ data }); // Cambié 'team' a 'equipo'
  }

  async findAll(): Promise<Equipo[]> { // Cambié 'Team' a 'Equipo'
    return this.prisma.equipo.findMany(); // Cambié 'team' a 'equipo'
  }

  async findOne(id: number): Promise<Equipo | null> { // Cambié 'Team' a 'Equipo'
    return this.prisma.equipo.findUnique({ where: { id } }); // Cambié 'team' a 'equipo'
  }

  async update(id: number, data: Prisma.EquipoUpdateInput): Promise<Equipo> { // Cambié 'TeamUpdateInput' a 'EquipoUpdateInput'
    return this.prisma.equipo.update({ where: { id }, data }); // Cambié 'team' a 'equipo'
  }

  async remove(id: number): Promise<Equipo> { // Cambié 'Team' a 'Equipo'
    return this.prisma.equipo.delete({ where: { id } }); // Cambié 'team' a 'equipo'
  }
}
