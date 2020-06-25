export class Usuario {

    
    private nombre: string;
    private email: string;
    private emailP: string;
    private direccion: string;

    constructor( $nombres: string, $email: string, $correo: string, $direccion: string) {
       
        this.nombre = $nombres;
        this.email = $email;
        this.correo = $correo;
        this.direccion = $direccion;
    }

}
