import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateProjectInput } from "./dto/create-project.input";
import { UpdateProjectInput } from "./dto/update-project.input";
import { Project } from "./entities/project.entity";
import { ProjectService } from './project.service';


@Resolver(() => Project)
export class ProjectResolver {
  constructor(
    private readonly projectService: ProjectService
  ) { }

  @Mutation(() => Project, { name: 'createProject' })
  createProject(@Args('createProjectInput') createProjectInput: CreateProjectInput) {
    return this.projectService.create(createProjectInput);
  }

  // update
  @Mutation(() => Project, { name: 'updateProject' })
  updateProject(@Args('updateProjectInput') updateProjectInput: UpdateProjectInput) {
    return this.projectService.update(updateProjectInput.id, updateProjectInput);
  }

  @Query(() => Project, { name: 'findOneProject' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findOne(id);
  }


  @Query(() => [Project], { name: 'findAllProjects' })
  findAll() {
    return this.projectService.findAll();
  }

  @Mutation(() => Project, { name: 'removeProject' })
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.delete(id);
  }

}