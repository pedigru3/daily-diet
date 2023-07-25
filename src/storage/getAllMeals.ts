import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealInterface } from "../entities/MealEntity";
import { MEAL_COLECTION } from './keys'

export async function getAllMeals(){
  try {
    const storagedMeals = await AsyncStorage.getItem(MEAL_COLECTION);
    if (storagedMeals === null){
      return []
    }
    const meals = JSON.parse(storagedMeals) as MealInterface[]

    convertDateStringsToDateObjects(meals)

    return meals
  } catch (error) {
    throw error
  }
}

export function convertDateStringsToDateObjects(array: MealInterface[]) {
  array.forEach((obj) => {
    if (obj.createdAt && typeof obj.createdAt === 'string') {
      obj.createdAt = new Date(obj.createdAt);
    }
  });
}