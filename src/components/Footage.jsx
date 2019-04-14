import React from "react";
import styled from 'styled-components'
import tw from "tailwind.macro";


const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`


const Footage = (props) =>(
<Footer>
    <p style={{position: center}}>&copy; 2019 by education without barriers.{' '}</p>
    <a href="https://github.com/MJChku/ewbsite.git">Github Repository</a>. Made by{'AC DT EWB'}
    <a href="">EWB</a>.
</Footer>

)

export default Footage