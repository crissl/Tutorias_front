export class PlanificacionAcompanamiento{
    id: number;
    codigoFormularios:number;
    codigo: number;
    interacion: number;
    fechaFormulario: Date;
    tipoPersona: string;
    tipoTutoria: string;
    spridenPidm: number;
    tema: string;
    publico: string;
    nrc: number;
    codAsignatura: string;
    asignatura: string;
    periodo: string;
    nivel: string;
    aula: string;
    fechaTutoria: string;
    horaInicio: string;
    horaIniciostring;
    observacion: string;
    estado: string;
    fechaCrea: string;
    usuaCrea: string;
    fechaModif: string;
    usuaModif: string;
    campCode: number;


    constructor($id: string, $codigoFormularios:number, $codigo: number, $interacion: number,
        $fechaFormulario: Date, $tipoPersona: string, $tipoTutoria: string, $spridenPidm: number, $tema: string,
        $publico: string, $nrc: number, $codAsignatura: string, $periodo: string, $nivel: s )
{
this.id = $id;
this.codigoFormularios = 0;
this.codigo =0;
this.interacion =0;


this.campCode =0;

}


}