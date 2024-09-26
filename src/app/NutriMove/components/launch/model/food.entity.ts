export class Food {
  id: number;
  Alimento: string;
  Cantidad: number;
  Calorias: string;
  Azucar: string;

  constructor(course:{id?: number, Alimento?: string, Cantidad?: number, Calorias?: string, Azucar?: string}) {
    this.id = course.id || 0;
    this.Alimento = course.Alimento || '';
    this.Cantidad = course.Cantidad || 0;
    this.Calorias = course.Calorias || '';
    this.Azucar = course.Azucar || '';
  }
}
