import { Button } from "@components/Button"
import { DateTitle, Description, Title, Container, StatusContainer, Icon, StatusDietProps, StatusText, Space } from "./styles"
import { formatDateDDMMYYY } from "@utils/dateFormat"
import { timeFormat } from "@utils/timeFormat"
import { useCallback, useRef, useState } from "react"
import { MealInterface } from "src/entities/MealEntity"
import { ActivityIndicator, Alert } from "react-native"
import { getMealById } from "@storage/getMealById"
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import { deleteMealById } from "@storage/deleteMeal"

type RouteParams = {
  id: string
}

export function MealInfo(){
  const [meal, setMeal] = useState<MealInterface | null>(null)

  const date = useRef('')
  const time = useRef('')

  const route = useRoute()
  const { id } = route.params as RouteParams

  const navigation = useNavigation()

  function handleMealEdit(){
    navigation.navigate('mealForm', { id })
  }

  async function deleteMeal(){
    await deleteMealById(id)
    navigation.navigate('home')
  }

  function handleMealDelete(){
    Alert.alert('Deseja realmente excluir o registro da Refeição?', '', [
      {text: 'Cancelar', style: 'cancel'}, 
      {text: 'Sim, excluir', onPress: () => deleteMeal()}
    ] )
  }

  async function fetchData(){
    const meal = await getMealById(id)
    if (meal === null){
      return Alert.alert('Erro', 'Algo deu errado!')
    }
    date.current = formatDateDDMMYYY(meal.createdAt)
    time.current = timeFormat(meal.createdAt)
    setMeal(meal)
  }

  useFocusEffect(
    useCallback(() => {
      fetchData()
    }, [])
  )

  return meal ? (
    <Container>
      <Title>{meal.title}</Title>
      <Description>{meal.description}</Description>
      <DateTitle>Data e hora</DateTitle>
      <Description>{date.current + ' às ' + time.current}</Description>
      <StatusContainer>
        <Icon type={meal.type as 'BAD'}/>
        {meal.type === 'GOOD' && 
        <StatusText>dentro da dieta</StatusText>
        }
        {meal.type === 'BAD' && 
        <StatusText>fora da dieta</StatusText>
        }
      </StatusContainer>
      <Space/>
      <Button 
        name="edit-3"
        title="Editar Refeição"
        onPress={handleMealEdit}
      />
      <Button 
        justBorder 
        name="trash-2" 
        title="Excluirs Refeição"
        onPress={handleMealDelete}
      />
    </Container>
  ) :
  <ActivityIndicator/>
}