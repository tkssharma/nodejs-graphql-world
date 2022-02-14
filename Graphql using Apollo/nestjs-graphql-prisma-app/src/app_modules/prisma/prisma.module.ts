import { DynamicModule, Module } from '@nestjs/common';

import { createRepositoryProviers } from './inject-repository.decorator';
import {
    createAsyncProviders,
    defaultPrismaOptions,
    PRISMA_OPTIONS,
    PrismaModuleAsyncOptions,
    PrismaModuleOptions,
} from './prisma.providers';
import { PrismaRepository } from './prisma.repository';

@Module({})
export class PrismaModule {
    static register(options: PrismaModuleOptions): DynamicModule {
        const repositoryProviers = createRepositoryProviers();
        options = { ...defaultPrismaOptions, ...options };
        return {
            global: true,
            module: PrismaModule,
            providers: [
                {
                    provide: PRISMA_OPTIONS,
                    useValue: options,
                },
                PrismaRepository,
                ...repositoryProviers,
            ],
            exports: [...repositoryProviers, PrismaRepository],
        };
    }

    static registerAsync(options: PrismaModuleAsyncOptions): DynamicModule {
        const repositoryProviers = createRepositoryProviers();
        return {
            global: true,
            module: PrismaModule,
            imports: options.imports || [],
            providers: [
                ...createAsyncProviders(options),
                ...repositoryProviers,
                PrismaRepository,
            ],
            exports: [...repositoryProviers, PrismaRepository],
        };
    }
}
