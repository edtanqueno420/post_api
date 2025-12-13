import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMyNewEndpoint(): string {
    return 'Hello desde MyNewEndpoint!';
  }
  health(): object{
    return {
      service:'Blog Backend Api',
      version:'Online',
     };
   }
}