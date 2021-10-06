import { Injectable, NestMiddleware } from '@nestjs/common';
import { json, raw } from 'body-parser';
import { Request, Response } from 'express';

// https://stackoverflow.com/questions/54346465/access-raw-body-of-stripe-webhook-in-nest-js

/**
 * Wraps the default json bodyParser behavior
 */
@Injectable()
export class JsonBodyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => any) {
    json()(req, res, next);
  }
}

/**
 * Wraps the default bodyParser raw behavior
 */
@Injectable()
export class RawBodyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => any) {
    raw({ type: '*/*' })(req, res, next);
  }
}
