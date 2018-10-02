import { Ingredient } from '../shared/ingredient.model';

export class IngredientsService {
    private ingredients: Ingredient [] = [
        new Ingredient('Toamtoes', 5),
        new Ingredient('Apples', 3)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }
}
