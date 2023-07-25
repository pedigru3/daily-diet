import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealInterface } from "../entities/MealEntity";
import { getAllMeals } from "./getAllMeals";
import { MEAL_COLECTION } from "./keys";

export const saveMeal = async (value: MealInterface) => {
  try {
    const meals: MealInterface[] = await getAllMeals()
    const storage = JSON.stringify([...meals, value])
    await AsyncStorage.setItem(MEAL_COLECTION, storage);
  } catch (error) {
    throw error
  }
};