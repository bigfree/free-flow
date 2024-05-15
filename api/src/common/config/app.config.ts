import { ConfigService } from '@nestjs/config';

export type AppConfig = {
    port: number;
};

export const appConfig = (configService: ConfigService): AppConfig => ({
    port: configService.get<number>('APP_PORT') || 4000,
});
