import { useEffect, useState } from "react";
import { DefaultBox, Container, Title, GoodBox, BadBox, BoxWrapper } from "./styled";
import { TitleWithSubtitle } from "@components/TitleWithSubtitle";
import { getAllMeals } from "@storage/getAllMeals";
import { ActivityIndicator } from "react-native";
import { MealInterface } from "src/entities/MealEntity";

export function Statistics(){
  interface Statistic {
    bestSequel: number;
    totalMeals: number;
    mealsIn: number;
    mealsOut: number;
  }

  function getBestSequel(meals: MealInterface[]){
    let bestSequel: number = 1;
    let currentSequel: number = 0;

    if (meals.length === 0){
      return 0
    }

    meals.forEach((meal) => {
      if (meal.type === 'GOOD'){
        currentSequel++
        if (currentSequel > bestSequel){
          bestSequel = currentSequel
        }
      } else {
        currentSequel = 0
      }
    })
    return bestSequel
  }

  const [statistic, setStatisctic] = useState<Statistic | null>(null)

  async function featchData(){
    const meals = await getAllMeals()
    const statistic: Statistic = {
      bestSequel: getBestSequel(meals),
      totalMeals: meals.length,
      mealsIn: meals.filter((m) => m.type === 'GOOD').length,
      mealsOut: meals.filter((m) => m.type === 'BAD').length,
    }
    setStatisctic(statistic)
  }

  useEffect(() => {
    featchData()
  })

  return statistic ? (
    <Container>
        <Title>Estatísticas Gerais</Title>
        <DefaultBox>
          <TitleWithSubtitle 
            title={`${statistic.bestSequel}`} 
            subtitle={"Melhor sequencia de pratos dentro da dieta"}
          />
        </DefaultBox>
        <DefaultBox>
          <TitleWithSubtitle 
            title={`${statistic.totalMeals}`} 
            subtitle={"refeições registradas"}
          />
        </DefaultBox>
        <BoxWrapper>
          <GoodBox>
            <TitleWithSubtitle 
              title={`${statistic.mealsIn}`} 
              subtitle={"refeições dentro da dieta"}
            />
          </GoodBox>
          <BadBox>
            <TitleWithSubtitle 
              title={`${statistic.mealsOut}`} 
              subtitle={"refeições fora da dieta"}
            />
          </BadBox>
        </BoxWrapper>
    </Container>
  ) : <ActivityIndicator/>
}