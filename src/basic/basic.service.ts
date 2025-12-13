import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicService {
    myFisrtGet(): object {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
        };
    }
    mySecondGet(): object {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
        };
    }
    functionWithParameter(parameter: string): object {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'Funcion para recibir parametro',
            parameter: parameter
        };
    }
    functionWithPost(parameter: object): object {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'Funcion para crear',
            bodyData: parameter
        };
    }
    updateWithPut(parameter:string,
        Body:object
    ):object{
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'Funcion para actualizar',
            parameter: parameter,
            body: Body
        }
    }
    updateWithPatch(parameter:string,
        Body:object
    ):object{
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'Funcion para actualizar',
            parameter: parameter,
            body: Body
        }
    }
    delete(parameter:string):object{
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'Funcion para eliminar',
            parameter: parameter,
        }
    }
    licencia(body: any): object {
        let respuesta: string;
        if (body.edad > 17 && body.licencia) {
            respuesta = 'Puede Conducir';
        }else if (body.edad > 17){
            respuesta = 'Debe Sacar licencia';
        }else {
            respuesta = 'Es menor de edad';
        }
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter: body,
            bodyData: respuesta
        };
    }

    areaTriangulo(base: number, altura: number): object {
    const resultado = (base * altura) / 2;

    return {
        servicio: 'Blog Backend API',
        operacion: 'Área de Triángulo',
        base: base,
        altura: altura,
        area: resultado
    };
}
    
    calcularMayor(parameter: any): object {
        let mayor: number;
        if (parameter.numero1 > parameter.numero2) {
            mayor = parameter.numero1;
        }else {
            mayor = parameter.numero2;
        }
        if (parameter.numero3 > mayor){
            mayor = parameter.numero3;
        }
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter: parameter,
            bodyData: mayor,
        };
    }
    calcularPromedio(nota1: number, nota2: number, nota3: number): object {
        const promedio =(nota1+nota2+nota3)/3
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter1: nota1,
            parameter2: nota2,
            parameter3: nota3,
            bodyData: promedio,
        };
    }

    verificarCredito(edad: number, ingreso: number, historialCrediticio: string): object {
    let aprobarCredito = "No";

        if (edad > 20 && ingreso > 2000 && historialCrediticio == "bueno") {
            aprobarCredito = "Si";
        }

        return {
        service: 'Blog Backend Api',
        version: 'basics get',
        message: 'Funcion con parametros',
        edad: edad,
        ingreso: ingreso,
        historialCrediticio: historialCrediticio,
        aprobarCredito: aprobarCredito,
        };
    }
}
