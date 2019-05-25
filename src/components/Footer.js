import React from 'react';
import styled from 'styled-components';
import { media } from './Breakpoints';
import { SubHeader } from './Headings';

const FooterLinks = [

  {
    name: 'Youtube',
    link: 'http://www.youtube.com/',
    color: '#b00',
  },
  {
    name: 'Github',
    link: 'https://github.com/',
    color: '#4183c4',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/',
    color: '#3b5998',
  },
];

const Footer = () => (
  <footer className="footer">

    <SubHeader>&copy; 2019 by education without barriers.  Find Us On</SubHeader>
    <SocialLinks>
      {FooterLinks.map(link => (
        <li key={link.name}>
          <SocialLink target="_blank" rel="nofollow" color={link.color} href={link.link}>
            {link.name}
          </SocialLink>
        </li>
      ))}
    </SocialLinks>
  </footer>
);

export default Footer;

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  
  ${media.tablet`
    display: flex;
    justify-content: center;
    li + li {
      margin-left: 20px;
    }
  `}
`;

const SocialLink = styled.a`
  padding: 5px 8px;
  border-radius: 3px;
  transition: all 0.3s ease;
  color: #fff;
  background-color: ${props => props.color};
  
`;
