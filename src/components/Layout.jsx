import React from 'react'
import GlobalStyle from '../styles/global'
import SEO from './SEO'
import 'typeface-cantata-one'
import 'typeface-open-sans'
import {Link} from 'gatsby';
import Helmet from 'react-helmet';
import 'typeface-lato';
import 'typeface-inconsolata';

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


const Layout = ({location, children}) => (
    <>
        <div>
            <Helmet title="EWB"/>
            <SiteHeader>
                <Link to="/">
                    <Logo page={location.pathname.replace('/', '')}>EWB</Logo>
                    <Name> Education Without Barriers</Name>
                </Link>
                <SiteNav>
                    <ul>
                        <li>
                            <NavLink underline="#16a085" to="/aboutus">
                                AboutUs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink underline="#e74c3c" to="/">
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

        </div>
        <Footer/>
    </>
);

export default Layout

