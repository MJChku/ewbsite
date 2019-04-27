import React from 'react'
import GlobalStyle from '../styles/global'
import SEO from './SEO'
import 'typeface-cantata-one'
import 'typeface-open-sans'
import {Link} from 'gatsby';
import Helmet from 'react-helmet';
import 'typeface-lato';
import 'typeface-inconsolata';
import Navhead from './Dropdown';
import './styles.css';
import Footer from './Footer';
import {
    SiteHeader, SiteNav, NavLink, Logo, Name, Main,
} from './Headings';
//
// const Layout = () => (
//   <>
//     <SEO />
//     <GlobalStyle />
//   </>
// )
const aboutus = {
  head:"aboutus",
  sub:[{name:"mission",link:"/aboutus"},
    {name:"program", link:"/aboutus"}]}



const Layout = ({location, children}) => (
        <>
            <Helmet title="EWB"/>
            <SiteHeader>
                <Link to="/">
                    <Logo >EWB</Logo>
                    <Name> Education Without Barriers</Name>
                </Link>
                <SiteNav>
                    <ul>
                        <li>
                            <Navhead>{aboutus}</Navhead>
                        </li>
                        <li>
                            <NavLink underline="#e74c3c" to="/abcmusic">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink underline="#2980b9" to="/">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </SiteNav>
            </SiteHeader>
            <Main>{children}</Main>
        </>

);

export default Layout

//page={location.pathname.replace('/', '')}