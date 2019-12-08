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
          <Title style={{ textAlign: "center" }}> Study </Title>
          <div style={{ paddingLeft: '20%' }}>
            <Text style={{ position: 'center'}}>
             
            </Text>
          </div>
        </Block>
      </Layout>
    );
  }
}
