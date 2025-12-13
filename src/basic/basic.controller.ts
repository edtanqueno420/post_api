import { Controller, Get, Post, Body, Put, Patch, Delete, Param, Query, UseGuards } from '@nestjs/common';
import { BasicService} from './basic.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('basics')
export class BasicController {
    constructor(
        private readonly basicService: BasicService) {}
    @Get()
    myFisrtGet(): object {
      return this.basicService.myFisrtGet();
    }
    @Get('my-second-get')
    mySecondGet(): object {
        return this.basicService.mySecondGet();
    }
    @Get('myParameter')
    requestWithParameter(myParameter: string): object {
        return this.basicService
        .functionWithParameter(myParameter);
    }
    @Post()
    create(@Body() bodyData: object) {
        return this.basicService
            .functionWithPost(bodyData);
    }
    @Put(':id')
    update(
       @Param('id') id: string,
       @Body() updateBody: object) {
       return this.basicService
          .updateWithPut(id,updateBody);
    }
    @Patch(':id')
    updatePatch(
       @Param('id') id: string,
       @Body() updateBody: object) {
       return this.basicService
          .updateWithPatch(id,updateBody);
    }
    @Delete(':id')
    delete(
       @Param('id') id: string) {
       return this.basicService
          .delete(id);
    }
    @Post('licencia-conducir')
    licencia(@Body() bodyData: Object) {
        return this.basicService
            .licencia(bodyData);
    }

    @Post('area-triangulo')
    areaTriangulo(@Body() bodyData: any) {
    const base = bodyData.base;
    const altura = bodyData.altura;

    return this.basicService.areaTriangulo(base, altura);
}

    @Post('calcular-mayor')
    calcularMayor(@Body() bodyData: Object) {
        return this.basicService
            .calcularMayor(bodyData);
    }
    
    @Get('calcular-promedio/:nota1/:nota2/:nota3')
    promedio(
        @Param('nota1') nota1: number,
        @Param('nota2') nota2: number,
        @Param('nota3') nota3: number,
    ){
        return this.basicService
        .calcularPromedio(nota1,nota2,nota3);
    }

    @Get('verificar-credito')
    verificarCredito(
        @Query('edad') edad: string,
        @Query('ingreso') ingreso: string,
        @Query('historialCrediticio') historialCrediticio: string,
    ) {
    return this.basicService
        .verificarCredito(+edad, +ingreso, historialCrediticio);
    }

}