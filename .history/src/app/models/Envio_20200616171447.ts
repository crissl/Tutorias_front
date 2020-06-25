export class Usuario {

    
    private nombre: string;
    private emailI: string;
    private emailP: string;
    private direccion: string;

    constructor($id: string, $cedula: string, $pidm: string, $nombres: string,
        $emailI: string, $emailP: string, $direccion: string) {
       
        this.nombre = $nombres;
        this.emailI = $emailI;
        this.correo = $emailP;
        this.direccion = $direccion;
    }

}
