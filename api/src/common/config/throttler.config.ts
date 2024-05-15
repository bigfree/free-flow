import { ConfigService } from '@nestjs/config';
import { seconds, ThrottlerModuleOptions } from '@nestjs/throttler';
import { ThrottlerStorageRedisService } from 'nestjs-throttler-storage-redis';
import Redis from 'ioredis';

export const throttlerConfig = (configService: ConfigService): ThrottlerModuleOptions => ({
    storage: new ThrottlerStorageRedisService(
        new Redis({
            host: configService.get<string>('REDIS_HOST') || 'redis',
            port: configService.get<number>('REDIS_PORT') || 6379,
        }),
    ),
    throttlers: [
        {
            name: 'short',
            ttl: seconds(1),
            limit: 3,
        },
        {
            name: 'medium',
            ttl: seconds(10),
            limit: 20,
        },
        {
            name: 'long',
            ttl: seconds(60),
            limit: 100,
        },
    ],
});
