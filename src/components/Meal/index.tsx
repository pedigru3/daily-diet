import { timeFormat } from "@utils/timeFormat";
import { Container, Divider, Icon, Time, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type MealProps = TouchableOpacityProps &{
  time: Date
  title: string
  type: 'GOOD' | 'BAD'
}

export function Meal({ time, title, type, ...rest }: MealProps){
  return (
    <Container {...rest}>
      <Time>{timeFormat(time)}</Time>
      <Divider/>
        <Title>
          {title}
        </Title>
      <Icon type={type} />
    </Container>
  )
}