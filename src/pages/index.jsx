import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import Footage from '../components/Footage'
// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import Menu from '../components/menu'
import chairs from '../../static/leaderBoard/chairs/chairs'

import avatar from '../../static/images/avatar/avatar.png'
import testAvatar from "../../static/images/avatar/test.jpeg"

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-60 xl:w-60 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const template = () => (
    <>
      <Layout />
      <Parallax pages={5}>
        <Hero offset={0}>
          <BigTitle>
            Hello Ewber, <br /> EWB daily news here.
          </BigTitle>
          <Subtitle>This site is for EWB news only.And we will you posted!</Subtitle>
        </Hero>
        <Menu />
        <Projects offset={1}>
          <Title>Us chapter</Title>
          <ProjectsWrapper>
            {
              chairs.map((chair) => (
                  <ProjectCard
                      id = {chair.id}
                      image={testAvatar}
                      title={chair.title}
                      link="https://www.educationwithoutbarriers.org/volunteer"
                      bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                  >
                    {chair.content}
                  </ProjectCard>)
              )
            }

          </ProjectsWrapper>
        </Projects>
        <About offset={3}>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="EWB" />
            <AboutSub>
              Founded in Sep 2016, Education Without Barriers (EWB) is an end-to-end online tutoring and mentorship
              platform aiming to empower and improve access to education for underprivileged children across the world,
              starting with orphans in China. At EWB, we believe that education is the most powerful, empowering, and enabling of human rights for an individual, and is the best gift one can provide to children.
              Education Without Barriers aims to tackle the problem of unequal access to educational resources.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            EWB American Chapter is supported by six departments: the Fundraising Department is mainly in charge of
            fundraising and other related work; the Financial Management Department takes charge of budget planning, fund management, and internal allocation; the Branding & Marketing Department
            is mainly responsible for brand building, marketing research, and developing marketing strategy;
          </AboutDesc>
        </About>
        <Contact offset={4}>
          <Inner>
            <Title>Previous websites</Title>
            <ContactText>
              View <a href="mailto:plizNoSp4m@domain.tld">it</a> Here
            </ContactText>
          </Inner>
          <Footage />
        </Contact>
      </Parallax>
    </>
)


