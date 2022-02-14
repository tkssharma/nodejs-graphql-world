import {
    INestApplication,
    Logger,
    NestApplicationOptions,
    ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AllExceptionsFilter } from 'app_modules/all-exceptions-filter';
import { useContainer } from 'class-validator';
import { NestoLogger } from 'nestolog';

import { AppEnvironment } from './app.environment';
import { AppModule } from './app.module';

if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // todo: errors
}

export async function createApp(options?: NestApplicationOptions) {
    const app = await NestFactory.create(AppModule, options);
    await configureApp(app);
    return app;
}

export async function configureApp(app: INestApplication) {
    app.enableCors();
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            validationError: {
                target: false,
            },
        }),
    );
    app.useGlobalFilters(new AllExceptionsFilter());
    useContainer(app.select(AppModule), { fallbackOnErrors: true });
}

async function main() {
    const app = await createApp();
    const appEnvironment = app.get(AppEnvironment);

    await app.listen(appEnvironment.port);
    const logger = app.get(Logger);
    // app.useLogger(logger);
    app.useLogger(app.get(NestoLogger));

    logger.log(`GraphQL application is running on: ${await app.getUrl()}`, 'main');
}

if (process.env.NODE_ENV !== 'test') {
    void main();
}
