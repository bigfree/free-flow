import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PrismaService } from './common/prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { LogModule } from './log/log.module';
import { WinstonModule } from 'nest-winston';
import { UserModule } from './user/user.module';
import { AuthorizeModule } from './authorize/authorize.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { UserPasswordService } from './common/services/user-password/user-password.service';
import { UserRoleService } from './common/services/user-role/user-role.service';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';
import { TokensService } from './common/services/tokens/tokens.service';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenService } from './refresh-token/refresh-token.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { throttlerConfig } from './common/config/throttler.config';
import { winstonConfig } from './common/config/winston.config';
import { graphqlConfig } from './common/config/graphql.config';
import { AppVersionMiddleware } from './common/middleware/app-version/app-version.middleware';
import { FlowModule } from './flow/flow.module';
import { TabModule } from './tab/tab.module';
import { FlowVersionModule } from './flow-version/flow-version.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { UserConfigModule } from './user-config/user-config.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        EventEmitterModule.forRoot(),
        ThrottlerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: throttlerConfig,
        }),
        WinstonModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: winstonConfig,
        }),
        GraphQLModule.forRootAsync({
            driver: ApolloDriver,
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: graphqlConfig,
        }),
        LogModule,
        UserModule,
        AuthorizeModule,
        RefreshTokenModule,
        FlowModule,
        TabModule,
        FlowVersionModule,
        WorkspaceModule,
        UserConfigModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        PrismaService,
        UserPasswordService,
        UserRoleService,
        TokensService,
        JwtService,
        RefreshTokenService,
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AppVersionMiddleware).forRoutes('*');
    }
}
