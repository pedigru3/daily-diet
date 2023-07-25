import { BackButton } from "@components/BackButton";
import { Button, Container, Title, Icon } from "./styles";
import { ReactNode } from "react";


type Props = {
  type?: 'DEFAULT' | 'GOOD' | 'BAD'
  children?: ReactNode
  title?: string
  onPress: () => void
}

export function Header({type = 'DEFAULT', children, title, onPress}: Props){
  return (
    <Container type={type}>
      <Button onPress={onPress}>
        <Icon type={type}/>
      </Button>
      {children}
      {title && <Title>{title}</Title>}
    </Container>
  )
}

