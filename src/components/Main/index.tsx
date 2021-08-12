import * as Styled from './styles'

const Main = ({
  title = 'EduSynch',
  description = 'TypeScript, NextJS e Styled Components'
}) => {
  return (
    <Styled.Container>
      <Styled.Logo src="/img/logo.svg" alt="Logo da EduSynch." />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Illustration
        src="/img/illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </Styled.Container>
  )
}

export default Main
