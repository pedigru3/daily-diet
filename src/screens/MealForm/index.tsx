import { ButtonWrapper, Container, Div, Input, InputDateTime, Label, Wrapper } from "./styled";
import { useEffect, useState } from "react";
import  {  Masks } from 'react-native-mask-input';
import { timeMask } from "@utils/timeMask";
import { timeFormat } from "@utils/timeFormat";
import { dateFormat } from "@utils/dateFormat";
import { MealInterface } from "../../entities/MealEntity";
import { Alert } from "react-native";
import uuid from 'react-native-uuid'
import { stringToDate } from "@utils/stringToDate";
import { saveMeal } from "../../storage/saveMeal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { updateMeal } from "@storage/UpdateMealById";
import { CheckButton } from "../../components/CheckButton";
import { Button } from "@components/Button";
import { getMealById } from "@storage/getMealById";

type RouteParams = {
  id?: string
} | undefined

export function MealForm(){
  const [date, setDate] = useState(dateFormat(new Date()))
  const [time, setTime] = useState(timeFormat(new Date()))
  const [isInDiet, setIsInDiet] = useState<boolean | null>(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const route = useRoute()
  const routePrams = route.params as RouteParams 

  const navigation = useNavigation()

  async function fetchData(){
    if (routePrams?.id){
      const meal = await getMealById(routePrams.id)
    if (meal === null){
      return Alert.alert('Erro', 'Algo deu errado!')
    }
    setDate(dateFormat(meal.createdAt))
    setTime(timeFormat(meal.createdAt))
    setIsInDiet(meal.type == 'GOOD' ? true : false)
    setName(meal.title)
    setDescription(meal.description)
    }
  }

  async function handleEditMeal(){
    if (name.trim().length < 3){
      return Alert.alert('Editar Refeição', 'Nome inválido!')
    }
    if (description.trim().length < 3){
      return Alert.alert('Editar Refeição', 'Adicione uma descrição')
    }
    if (isInDiet === null){
      return Alert.alert('Editar Refeição', 'Informe se está dentro da dieta')
    }
    try {
      const meal: MealInterface = {
        id: routePrams!.id!,
        title: name,
        description: description,
        type: isInDiet ? 'GOOD' : 'BAD',
        createdAt: stringToDate(date, time)
      }
      await updateMeal(meal)
      navigation.goBack()
    } catch (error) {
      return Alert.alert('Editar Refeição', 'Ops! Algo deu errado!')
    }
  }

  async function handleRegisterNewMeal(){
    if (name.trim().length < 3){
      return Alert.alert('Nova Refeição', 'Nome inválido!')
    }
    if (description.trim().length < 3){
      return Alert.alert('Nova Refeição', 'Adicione uma descrição')
    }
    if (isInDiet === null){
      return Alert.alert('Nova Refeição', 'Informe se está dentro da dieta')
    }
    try {
      const meal: MealInterface = {
        id: uuid.v4().toString(),
        title: name,
        description: description,
        type: isInDiet ? 'GOOD' : 'BAD',
        createdAt: stringToDate(date, time)
      }
      await saveMeal(meal)
      navigation.navigate('mealFeedback', {type: meal.type})
    } catch (error) {
      Alert.alert('Nova Refeição', 'Ops, algo deu errado!')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <Label>Nome</Label>
      <Input
        value={name}
        onChangeText={setName}
      />

      <Label>Descrição</Label>
      <Input
      value={description}
      style={{height: 120, flexWrap: 'wrap'}}
      onChangeText={setDescription}
      multiline
     />

      <Wrapper>
        <Div>
        <Label>Data</Label>
        <InputDateTime
        value={date}
        onChangeText={setDate}
        mask={Masks.DATE_DDMMYYYY}
        />
       
        </Div>

        <Div>
        <Label>Hora</Label>
        <InputDateTime
        value={time}
        onChangeText={setTime}
        mask={timeMask}
        />
        </Div>
      </Wrapper> 

      <Label>Está dentro da Dieta?</Label>
      <CheckButton onPress={setIsInDiet}/>

      <ButtonWrapper>
        <Button
          withIcon={routePrams?.id ? false : true}
          title={routePrams?.id ? 'Salvar alterações' : 'Cadastrar refeição'}
          onPress={
            routePrams?.id ? handleEditMeal : handleRegisterNewMeal
          }
        />
      </ButtonWrapper>
    </Container>
  )
}