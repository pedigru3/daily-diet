import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealInterface } from "../entities/MealEntity";
import { MEAL_COLECTION } from "./keys";

export async function getMealById(id: string){
  try {
      const storagedMeals = await AsyncStorage.getItem(MEAL_COLECTION);
    if (!storagedMeals){
      return null
    }
    const meals = JSON.parse(storagedMeals) as MealInterface[]

    const meal = meals.find((meal) => meal.id === id)

    if (!meal){
      return null
    }

    meal.createdAt = new Date(meal.createdAt)
    
    return meal
  } catch (error) {
    throw error
  }
}