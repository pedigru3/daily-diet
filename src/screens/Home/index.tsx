import { Avatar, Container, Header, Logo, Text } from "./styles"
import imageLogo from "@assets/logo.png"
import imageAvatar from "@assets/foto.png"
import { PercentButton } from "@components/PercentButton"
import { Button } from "@components/Button"
import { DayList } from "@components/DayList"
import { ActivityIndicator, Alert, FlatList } from "react-native"
import { getUniqueDates } from "@utils/getUniquedates"
import { dateFormat } from "@utils/dateFormat"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { MealInterface } from "src/entities/MealEntity"
import { useCallback, useRef, useState } from "react"
import { getAllMeals } from "@storage/getAllMeals"

export function Home(){
  const [data, setData] = useState<MealInterface[]>([])
  const [isLoading, setIsLoading] = useState(true)

  let dates = useRef<string[]>([])

  const navigation = useNavigation()

  async function fetchAllMeals(){
    try {
      const meals = await getAllMeals()
      dates.current = getUniqueDates(meals.map((i) => i.createdAt));
      setData(meals)
    } catch (error) {
      Alert.alert('Home', 'ops, algo deu errado!')
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchAllMeals()
      setIsLoading(false)
    }, [])
  )

  
  return  isLoading ?  
       <ActivityIndicator/>
       :
       (
        <Container>
          <Header>
            <Logo source={imageLogo} />
            <Avatar source={imageAvatar} />
          </Header>
          <PercentButton percent={90.98} onPress={ () => {
            navigation.navigate('statistics')
          }
          }/>
          <Text>Refeições</Text>
          <Button title="Nova Refeição" onPress={() => {
            navigation.navigate('mealForm')
          }
          }/>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dates.current}
            renderItem={({ item }) => (
              <DayList 
                date={item} 
                meals={
                  data.filter((meal) => item === dateFormat(meal.createdAt))
                }
              />
            )} 
          />
          </Container>)
        
}