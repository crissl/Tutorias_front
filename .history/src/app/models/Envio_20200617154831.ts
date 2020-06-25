import {Correo} from 'app/models/correo'

export class  Envio {


    
    private asunto: string;
    private mensaje: string;
    private sistema: string;
    
    private email: Correo;




    constructor( $asunto: string, $mensaje: string, $sistema: string,$nombres: string, $email: string, $correo: Correo, ) {
        this.asunto = $asunto;
        this.mensaje = $mensaje;
        this.sistema = $sistema; 
        this.nombre = $nombres;
        this.email = $email;
        this.correo = $correo;
    }

}
