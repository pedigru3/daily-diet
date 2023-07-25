import { Container, Subtitle, Title, TitleWithSubititleStyleType } from "./styles";

type Props = {
  title: string
  subtitle: string
  type?: 'PRIMARY' | 'SECONDARY'
}

export function TitleWithSubtitle({
  title,
  subtitle,
  type = 'SECONDARY' } : Props){
  return (
    <Container>
      <Title type={ type } > {title} </Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}