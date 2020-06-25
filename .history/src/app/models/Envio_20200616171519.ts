export class Usuario {

    
    private nombre: string;
    private emailI: string;
    private emailP: string;
    private direccion: string;

    constructor($id: string, $cedula: string, $pidm: string, $nombres: string,
        $email: string, $correo: string, $direccion: string) {
       
        this.nombre = $nombres;
        this.email = $email;
        this.correo = $correo;
        this.direccion = $direccion;
    }

}
