export class Usuario {

    
    private asunto: string;
    private mensaje: string;
    private sistema: string;
    private nombre: string;
    private email: string;
    private correo: string;
    private direccion: string;

    constructor( $asunto: string, $mensaje: string, $correo: string,$nombres: string, $email: string, $correo: string, $direccion: string) {
       
        this.nombre = $nombres;
        this.email = $email;
        this.correo = $correo;
        this.direccion = $direccion;
    }

}
