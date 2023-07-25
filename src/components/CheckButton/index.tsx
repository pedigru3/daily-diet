import { useState } from "react";
import { Button, Container, Icon, Title } from "./styles";

type Props = {
  onPress: (value: boolean) => void
}

export function CheckButton({ onPress }:Props){
  const [isChecked, setIsChecked] = useState<boolean | null>(null);

  return (
    <Container>
      <Button isChecked={isChecked === null ? null : isChecked} type="PRIMARY"
        onPress={() => {
          setIsChecked(true)
          onPress(true)
        }}
      >
        <Icon type="PRIMARY"/>
        <Title>Sim</Title>
      </Button>
      <Button isChecked={isChecked === null ? null : !isChecked } type="SECONDARY" 
        onPress={() => {
          setIsChecked(false)
          onPress(false)
        }}
      >
        <Icon type="SECONDARY"/>
        <Title>Não</Title>
      </Button>
    </Container>
  )
}