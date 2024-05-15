import { ConfigService } from '@nestjs/config';
import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston/dist/winston.utilities';
import 'winston-daily-rotate-file';

export const winstonConfig = (configService: ConfigService): WinstonModuleOptions => ({
    transports: [
        // https://github.com/winstonjs/winston-daily-rotate-file
        new winston.transports.DailyRotateFile({
            filename: configService.get<string>('WINSTON_DAILY_FILE_NAME') || 'logs/application-%DATE%.log',
            datePattern: configService.get<string>('WINSTON_DAILY_DATE_PATTERN') || 'YYYY-MM-DD',
            zippedArchive: configService.get<boolean>('WINSTON_DAILY_ZIPPED_ARCHIVE') || true,
            maxSize: configService.get<string>('WINSTON_DAILY_MAX_SIZE') || '20m',
            maxFiles: configService.get<string>('WINSTON_DAILY_MAX_FILES') || '14d',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        }),
        // https://github.com/winstonjs/winston/blob/master/docs/transports.md#console-transport
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.ms(),
                nestWinstonModuleUtilities.format.nestLike(configService.get<string>('APP_NAME'), {
                    colors: true,
                    prettyPrint: true,
                }),
            ),
        }),
        // other transports...
    ],
});
