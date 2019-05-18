import React, { useState, useRef } from 'react'
import { useTransition, useSpring, useChain,animated, config } from 'react-spring'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Avatars from './Avatar'
import tw from 'tailwind.macro'

const Container = styled(animated.a)`

 width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-0 md:py-10 text-white`};
  will-change: width, height;
  cursor: pointer;
  background: ${props => props.bg};
`
const Wrapper = styled.a`

  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  will-change: width, height;
   cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
//  background: ${props => props.bg};
  
`

const Details = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  color: #FFB6C1;
  
`

const Text = styled.div`
  //${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  //${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const ProjectCard = ({ title, image, children, details}) => {

  const [open, set] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    //config: config.stiff,
    from: { size: '50%', background: 'hotpink' },
    to: { size: open ? '100%' : '50%', background: open ? 'blue' : 'hotpink' }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? [details] : [], item => item, {
    ref: transRef,
    unique: true,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })
  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

  return (

      <Container style={{ ...rest,width: size, height: size }} onClick={() => set(open => !open)}>

          <Title>{title}</Title>
          <Text>{children}</Text>
          <Avatars image={image}/>
        { transitions.map(({key }) => (
            <Details key={key}>
              {details}
            </Details>
          ))}
      </Container>

  )
}

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
