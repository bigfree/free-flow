import { ConfigService } from '@nestjs/config';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { DateScalarMode } from '@nestjs/graphql';
import { GraphQLFormattedError } from 'graphql/error';

export const graphqlConfig = (configService: ConfigService): ApolloDriverConfig => ({
    playground: false,
    autoSchemaFile: join(process.cwd(), configService.get<string>('GRAPHQL_SCHEMA_NAME') || 'schema.gql'),
    sortSchema: configService.get<boolean>('GRAPHQL_SCHEMA_NAME') || true,
    cache: new InMemoryLRUCache({
        // ~100MiB
        maxSize: Math.pow(2, 20) * 100,
        // 5 minutes (in seconds)
        ttl: parseInt(configService.get<string>('GRAPHQL_CACHE_TTL'), 10) || 300,
    }),
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    subscriptions: {
        'graphql-ws': {
            path: configService.get<string>('GRAPHQL_SUBSCRIPTION_PATH') || '/graphql',
        },
    },
    context: ({ req, res, connectionParams, extra }) => ({
        req,
        res,
        connectionParams,
        extra,
    }),
    buildSchemaOptions: {
        dateScalarMode: configService.get<DateScalarMode>('GRAPHQL_SCALAR_DATE_MODE') || 'isoDate',
        // fieldMiddleware: [loggerMiddleware],
    },
    formatError: (error: GraphQLFormattedError) => {
        const originalError = error.extensions?.originalError as Error;

        if (!originalError) {
            return {
                message: error.message,
                code: error.extensions?.code,
                stackTrace: error.extensions?.stacktrace,
            };
        }

        return {
            message: originalError.message,
            code: error.extensions?.code,
            stackTrace: error.extensions?.stacktrace,
        };
    },
});
