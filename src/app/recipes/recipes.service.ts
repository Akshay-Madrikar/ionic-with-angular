import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Burger",
      imageUrl:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
      ingredients: ["Meat", "Salad", "Bun"],
    },
    {
      id: "r2",
      title: "Pizza",
      imageUrl:
        "https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg",
      ingredients: ["Bread", "Chicken", "Salami"],
    },
    {
      id: "r3",
      title: "Taco",
      imageUrl:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371603491866.jpeg",
      ingredients: ["Flour", "Beans", "Shredded Cheese"],
    },
    {
      id: "r4",
      title: "Donuts",
      imageUrl:
        "https://media.istockphoto.com/photos/donut-with-sprinkles-isolated-picture-id538335769?k=6&m=538335769&s=612x612&w=0&h=3tWMzxWCN99V21CcbUny2TQBsYklc1es3gARr4add7s=",
      ingredients: ["Baking powder", "Egg", "Vanilla"],
    },
    {
      id: "r5",
      title: "Sandwich",
      imageUrl:
        "https://static.toiimg.com/thumb/54714340.cms?imgsize=458099&width=800&height=800",
      ingredients: ["Bread", "Mayonnaise", "Cheese"],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find((recipe) => recipe.id === recipeId) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
