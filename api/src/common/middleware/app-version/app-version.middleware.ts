import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppVersionMiddleware implements NestMiddleware {
    constructor(private readonly configService: ConfigService) {}

    public use(req: Request, res: Response, next: NextFunction) {
        const appVersion = this.configService.get<string>('APP_VERSION');
        res.setHeader('App-Version', appVersion || 'dev');
        next();
    }
}
