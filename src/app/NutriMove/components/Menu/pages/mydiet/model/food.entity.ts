export class Food {

  id: number;
  name: string;
  calories: number;
  proteins: number;
  carbohydrates: number;
  fats: number;

  constructor(food: {id?: number, name?: string, calories?: number, proteins?: number, carbohydrates?: number, fats?: number}) {
    this.id = food.id || 0;
    this.name = food.name ||"";
    this.calories = food.calories || 0;
    this.proteins = food.proteins || 0;
    this.carbohydrates = food.carbohydrates || 0;
    this.fats = food.fats || 0;
  }
}
