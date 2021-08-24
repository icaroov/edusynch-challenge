import Header from 'components/Header'
import Footer from 'components/Footer'
import Card from 'components/Card'
import Loader from 'components/Loader'

import { Course } from 'lib/mirage'

import * as Styled from './styles'

type DashboardProps = {
  courses: Course[]
  isLoading: boolean
}

const Dashboard = ({ courses, isLoading }: DashboardProps) => {
  return (
    <>
      <Styled.Container>
        <Styled.SectionHeader>
          <Header />
        </Styled.SectionHeader>

        <Styled.Content>
          <Styled.HeroCard>
            <Styled.LeftSide>
              <img src="/img/illustration-3.svg" alt="illustration" />
              <h1>
                Hello <strong>Student</strong>
                <span>.</span>
              </h1>
              <p>
                Whether you are a student trying to find your ideal private
                language teachers/tutors
              </p>
            </Styled.LeftSide>

            <Styled.RightSide>
              <img src="/img/illustration-1.svg" alt="meeting" />
            </Styled.RightSide>
          </Styled.HeroCard>

          {isLoading ? (
            <Styled.LoaderContainer>
              <Loader />
            </Styled.LoaderContainer>
          ) : (
            <Styled.SectionCard>
              {courses.map(card => (
                <Card key={card.id} {...card} />
              ))}
            </Styled.SectionCard>
          )}
        </Styled.Content>
      </Styled.Container>

      <Styled.SectionFooter>
        <Footer />
      </Styled.SectionFooter>
    </>
  )
}

export default Dashboard
