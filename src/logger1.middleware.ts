import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class Logger1Middleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`${req.ip} ${req.method} ${req.originalUrl}`);
    res.on('finish', () => {
      this.logger.log(`${res.statusCode}`);
    });
    next();
  }
}
