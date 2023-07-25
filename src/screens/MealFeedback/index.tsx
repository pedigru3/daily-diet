import { useNavigation, useRoute } from "@react-navigation/native";
import { Bold, Container, Description, Title } from "./styled";
import { Image } from "react-native";
import GoodIlustration from '@assets/Illustration.png'
import BadIlustration from '@assets/Illustration-bad.png'
import { Button } from "@components/Button";


type RouteParams = {
  type: 'GOOD' | 'BAD'
}

export function MealFeedBack(){

  const route = useRoute()
  const { type } = route.params as RouteParams

  const navigation = useNavigation()

  return (
    <Container>
      <Title type={type}>
        {type === 'GOOD' ?
          'Continue assim!'
          :
          'Que pena!'
        }
      </Title>
      <Description>
        {type === 'GOOD' ?
            'Você continua'
            :
            'Você'
        } 
        <Bold>
        {type === 'GOOD' ?
            ' dentro da dieta '
            :
            ' saiu da dieta '
        } 
        </Bold>
        {type === 'GOOD' ?
            '. Muito bem!'
            :
            'dessa vez, mas continue se esforçando e não desista!'
        } 
      </Description>
      <Image
      style={
        {marginTop: 32, marginBottom: 32}
      }
      source={
        type === 'GOOD' ?
        GoodIlustration
        :
        BadIlustration
      }/>
      <Button
        withIcon={false}
        title="Ir para página inicial"
        style={{width: 200 }}
        onPress={() => navigation.navigate('home')}
      />
    </Container>
  )
}