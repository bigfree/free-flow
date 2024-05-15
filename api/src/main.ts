import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './common/prisma/prisma-exception.filter';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const port = configService.get<number>('APP_PORT');

    app.useGlobalFilters(new PrismaExceptionFilter());
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
    app.enableCors({
        exposedHeaders: ['App-Version'],
    });
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );

    await app.listen(port);

    Logger.log(`🚀 Application is running on: ${await app.getUrl()}`);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
bootstrap().then((_r) => null);
