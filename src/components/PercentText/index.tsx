import { TitleWithSubtitle } from "@components/TitleWithSubtitle";
import { useFocusEffect } from "@react-navigation/native";
import { getAllMeals } from "@storage/getAllMeals";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";


export function PercentText(){
  const [formatedNumber, setFormatedNumber] = useState<string | null>(null)

  async function featchData(){
    const meals = await getAllMeals()

    const mealsIn = meals.filter((m) => m.type === 'GOOD').length

    const percent = mealsIn / meals.length * 100

    let formatedNumber = percent.toFixed(2).replace('.', ',')

    if (percent * 100 % 100 === 0) {
      formatedNumber = percent.toString()
    }
    setFormatedNumber(formatedNumber)
  }

  useFocusEffect(
    useCallback(() => {
        featchData()
  }, []))


  return formatedNumber ? (
    <TitleWithSubtitle
      type="PRIMARY" 
      title={`${formatedNumber}%`}
      subtitle="das refeições dentro da dieta"
    />
  ) : <ActivityIndicator/>
}