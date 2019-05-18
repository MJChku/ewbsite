import styled from 'styled-components';
import tw from "tailwind.macro";

const Title = styled.a`
  ${tw`font-serif text-6xl text-white`};
`;

const MediumTitle = styled.a`
  ${tw`font-serif text-4xl text-white`};  
`;

const Text = styled.p`
  ${tw`text-grey-light font-serif text-xl md:text-2xl lg:text-sm w-1/2`}; 
`


const Block = styled.div({
  height: `500px`,
  textAlign: 'center',
  //backgroundPosition: `0 .25em`,
  //backgroundSize: `10em`,
});




export {
  Title, MediumTitle, Text,Block
};
