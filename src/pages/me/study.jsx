import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Layout from "../../components/Layout";
import chairs from "../../../static/leaderBoard/chairs/chairs";
import ProfileCard from "../../components/ProfileCard";
import { Title, MediumTitle, Text } from "../../styles/stylesheet";
import testAvatar from "../../../static/images/avatar/test.jpeg";
import img from "../../../static/images/team/team.jpg";
import Block from "../../components/Block";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Main = styled.main`
  max-width: 960px;
  margin: 50px auto;
  min-height: 70vh;
  padding: 100px 5% 80px;
`;


export default class Team extends React.Component {
  render() {
    return (
      <Layout {...this.props} >
        <Block img={img}>
          <Title style={{ textAlign: "center" }}> TEAM STRUCTURE: </Title>
          <div style={{ paddingLeft: '20%' }}>
            <Text style={{ position: 'center'}}>
              According to Education without Barriers (EWB)’s Constitution, the Board of Directors (“the Board”) shall
              be its highest authority. Being appointed by the Board, Secretaries of American Chapter, Hong Kong
              Chapter, and India Chapter shall exercise on the Board’s behalf the power to govern EWB’s relevant
              functioning Divisions and their Heads in that Chapter, respectively. Steering Committee shall represent
              the Cofounders, Volunteers, Donators and other stakeholders’ interests in exercising its power to
              supervise the Board’s behaviors and Advisors shall help the Board shape its decisions.
            </Text>
          </div>
        </Block>

        <ProjectsWrapper>
          {
            chairs.map((chair) => (
              <ProfileCard
                id={chair.id}
                image={testAvatar}
                title={chair.title}
                bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                details={chair.details}
              >
                {chair.content}
              </ProfileCard>)
            )
          }

        </ProjectsWrapper>

      </Layout>
    );
  }
}
