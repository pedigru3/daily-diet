import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLECTION } from "./keys";
import { MealInterface } from "../entities/MealEntity";
import { saveMeal } from "./saveMeal";

export async function deleteMealById(id: string){
  try {
    const storagedMeals = await AsyncStorage.getItem(MEAL_COLECTION);
  if (!storagedMeals){
    throw new ResourceNotFoundError()
  }
  const meals = JSON.parse(storagedMeals) as MealInterface[]

  const storage = meals.filter((meal) => meal.id !== id)

  AsyncStorage.setItem(MEAL_COLECTION, JSON.stringify(storage))
  
} catch (error) {
  throw error
}
}