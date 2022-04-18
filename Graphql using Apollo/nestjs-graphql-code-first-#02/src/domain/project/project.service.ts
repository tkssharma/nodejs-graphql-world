import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from '@nestjs/common';
import { Project } from "./entities/project.entity";
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from "./dto/update-project.input";
import { Repository } from "typeorm";


@Injectable()
export class ProjectService {

  constructor(@InjectRepository(Project) private projectRepository: Repository<Project>) {

  }
  async create(input: CreateProjectInput) {
    let project = this.projectRepository.create(input);
    return await this.projectRepository.save(project);
  }
  async findAll(): Promise<Project[]> {
    // lazy fetch
    return await this.projectRepository.find({
      relations: ["employees", "employees.categories"]
    })
  }
  async findOne(id: number): Promise<Project> {
    // lazy fetch
    return await this.projectRepository.findOne({
      where: { id },
      relations: ["employees"]
    })
  }

  async update(id: number, input: UpdateProjectInput): Promise<Project> {
    // lazy fetch
    const project = await this.projectRepository.findOne({ where: { id } });
    if (project) {
      project.code = input.code;
      project.name = input.name;
      return await this.projectRepository.save(project);
    }
  }

  async delete(id: number): Promise<any> {
    return await this.projectRepository.delete(id)
  }
}