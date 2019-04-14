import styled, { css } from 'styled-components';
import tw from 'tailwind.macro'

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
export {
    ProjectsWrapper, AboutHero, Avatar,AboutSub,ContactText,AboutDesc
};