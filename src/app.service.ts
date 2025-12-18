import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): any {
    return {
      success: true,
      message: 'tanqueno-post-api on line',
      data: 'Sistema Posts API',
      version: '1.0.0',
    }
  }
  
}