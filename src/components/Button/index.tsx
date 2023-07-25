import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
  justBorder?: boolean
  name?: string
  withIcon?: boolean
}

export function Button({withIcon = true, title, name = 'plus', justBorder = false, ...rest} : Props){
  return (
    <Container justBorder={justBorder} {...rest}>
      {withIcon && <Icon justBorder={justBorder}  name={name} weigth={20} />}
      <Title justBorder={justBorder}>{title}</Title>
    </Container>
  )
}