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
    horaFin: string;
    observacion: string;
    estado: string;
    fechaCrea: string;
    usuaCrea: string;
    fechaModif: string;
    usuaModif: string;
    campCode: number;


    constructor($id: number, $codigoFormularios:number, $codigo: number, $interacion: number,
        $fechaFormulario: Date, $tipoPersona: string, $tipoTutoria: string, $spridenPidm: number, $tema: string,
        $publico: string, $nrc: number, $codAsignatura: string, $periodo: string, $nivel: string, $aula: string, 
        $fechaTutoria: string, $horaInicio: string, $horaFin: string, $observacion: string, $estado: string, 
        $fechaCrea: string, $usuaCrea: string, $fechaModif: string, $usuaModif: string, $campCode: number   )
{
this.id = $id;
this.codigoFormularios = $codigoFormularios;
this.codigo = $codigo;
this.interacion = 0;
this.fechaFormulario = $fechaFormulario;
this.tipoPersona = $tipoTutoria;
this.spridenPidm = $spridenPidm;
this.tema = $tema;
this.publico = $publico;
this.nrc = $nrc;
this.codAsignatura = $codAsignatura;
this.periodo = $periodo;
this.nivel = $nivel;
this.aula = $aula;
this.fechaTutoria = $fechaTutoria;
this.horaInicio = $horaInicio;
this.horaFin = $horaFin;
this.observacion = $observacion;
this.estado = $estado;
this.fechaCrea = $fechaCrea;
this.usuaCrea = $usuaCrea;
this.fechaModif = $fechaModif;
this.usuaModif = $usuaModif;
this


this.campCode =$campCode;

}


}