import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TeamService } from './teams.service'; 
import { Prisma, Equipo } from '@prisma/client'; 
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('equipos')
@Controller('equipos')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new team' }) 
  @ApiResponse({ status: 201, description: 'The team has been created.' }) 
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createTeamDto: Prisma.EquipoCreateInput): Promise<Equipo> { 
    return this.teamService.create(createTeamDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all teams' }) 
  @ApiResponse({ status: 200, description: 'Return all teams.' }) 
  @ApiResponse({ status: 404, description: 'Not found.' })
  async findAll(): Promise<Equipo[]> { 
    return this.teamService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a team by ID' }) 
  @ApiResponse({ status: 200, description: 'Return a team by ID.' }) 
  @ApiResponse({ status: 404, description: 'Team not found.' }) 
  async findOne(@Param('id') id: number): Promise<Equipo | null> { 
    return this.teamService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a team by ID' }) 
  @ApiResponse({ status: 200, description: 'The team has been updated.' }) 
  @ApiResponse({ status: 404, description: 'Team not found.' })
  async update(@Param('id') id: number, @Body() updateTeamDto: Prisma.EquipoUpdateInput): Promise<Equipo> { // Cambié 'updateEquipoDto' a 'updateTeamDto'
    return this.teamService.update(id, updateTeamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a team by ID' }) 
  @ApiResponse({ status: 200, description: 'The team has been deleted.' }) 
  @ApiResponse({ status: 404, description: 'Team not found.' }) 
  async remove(@Param('id') id: number): Promise<Equipo> { 
    return this.teamService.remove(id);
  }
}
