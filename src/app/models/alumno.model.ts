export class Alumno{
   public id: number;
   public nombre: string;
   public semestre: number;
   public status: string;

    constructor(id: number, nombre: string, semestre: number, status: string){
        this.id = id;
        this.nombre = nombre;
        this.semestre = semestre;
        this.status = status;
    }
}