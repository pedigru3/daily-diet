import { Container, Icon } from "./styles";
import { PercentText } from "@components/PercentText";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  percent: number
}

export function PercentButton({percent, ...rest}: Props){
  const type = percent >= 70 ? 'GOOD' : 'BAD'

  return (
    <Container type={type} {...rest}>
      <PercentText />
      <Icon type={type} />
    </Container>
  )
}