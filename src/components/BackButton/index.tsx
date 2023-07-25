import { TouchableOpacityProps } from "react-native";
import { BackButtonStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type?: 'DEFAULT' | 'GOOD' | 'BAD'
}

export function BackButton({ type = 'DEFAULT', ...rest } : Props){
  return (
    <Container {...rest}>
      <Icon type={type}  />
    </Container>
  )
}