import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Project } from "./entities/project.entity";
import { ProjectResolver } from "./project.resolver";
import { ProjectService } from "./project.service";


@Module({
  imports: [
    TypeOrmModule.forFeature([Project])
  ],
  providers: [
    ProjectResolver, ProjectService
  ]
})

export class ProjectModule {
  
}