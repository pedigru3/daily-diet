import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLECTION } from "./keys";
import { MealInterface } from "../entities/MealEntity";

export async function updateMeal(meal: MealInterface){
  try {
    const storagedMeals = await AsyncStorage.getItem(MEAL_COLECTION);
  if (!storagedMeals){
    throw new ResourceNotFoundError()
  }
  const meals = JSON.parse(storagedMeals) as MealInterface[]

  const index = meals.findIndex((i) => i.id === meal.id)

  meals[index] = meal;

  const storage = JSON.stringify(meals)

  AsyncStorage.setItem(MEAL_COLECTION, storage)
  
} catch (error) {
  throw error
}
}