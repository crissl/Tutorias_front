import {Correo} from 'app/models/correo'

export class  Envio {


    
    public asunto: string;
    public mensaje: string;
    public sistema: string;
    public email: any;




    constructor( $asunto: string, $mensaje: string, $sistema: string, $email: any) {
        this.asunto = $asunto;
        this.mensaje = $mensaje;
        this.sistema = $sistema;
        this.email = $email; 
    }

}
