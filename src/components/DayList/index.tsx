import { Meal } from "@components/Meal";
import { Container, DateText } from "./styles";
import { FlatList } from "react-native";
import { MealInterface } from "../../entities/MealEntity";
import { dateFormat } from "@utils/dateFormat";
import { useNavigation } from "@react-navigation/native";

type Props = {
  date: string
  meals: MealInterface[]
}

export function DayList({ date, meals } : Props){

  const navigation = useNavigation()
  
  return (
    <Container>
      <DateText>
        {date}
      </DateText>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={meals}
        renderItem={({ item }) => (
          <Meal
           time={item.createdAt} 
           title={item.title} 
           type={item.type}
           onPress={
            () => navigation.navigate('mealInfo', {id: item.id, type: item.type})
           }
          />
        )}  
      />
    </Container>
  )
}