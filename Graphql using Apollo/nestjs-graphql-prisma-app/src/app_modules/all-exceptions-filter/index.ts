import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { serializeError } from 'serialize-error';

/**
 * Temporary solution
 * https://github.com/the-vampiire/apollo-error-converter/issues/23
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        if (host.getType() === 'http') {
            // todo: need find status code
            const response = host.switchToHttp().getResponse<Response>();
            return response.status(500).json({
                timestamp: new Date().toISOString(),
                errors: serializeError(exception),
            });
        }
        // Fill name, code, type fields for Apollo Error Converter
        if (typeof exception === 'object') {
            if (!exception.type) {
                exception.type = exception.constructor?.name || exception.message;
            }
            if (!exception.code) {
                exception.code = exception.status;
            }
        }
        return exception;
    }
}
