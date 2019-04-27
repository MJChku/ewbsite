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

import {navigation} from '../../static/data/navigation';

const Layout = ({location, children}) => {
  const page=location.pathname.replace('/', '')
  return(
          <>
              <Helmet title="EWB"/>
              <SiteHeader>
                  <Link to="/">
                      <Logo >EWB</Logo>
                      <Name> {page==='' ? 'Education Without Barriers': page }</Name>
                  </Link>
                  <SiteNav>
                      <ul>
                        {navigation.map((page)=>(
                          <li>
                            <Navhead>{page}</Navhead>
                          </li>
                        ))}
                          {/*<li>*/}
                              {/*<Navhead>{aboutus}</Navhead>*/}
                          {/*</li>*/}
                          {/*<li>*/}
                              {/*<NavLink underline="#e74c3c" to="/abcmusic">*/}
                                  {/*Projects*/}
                              {/*</NavLink>*/}
                          {/*</li>*/}
                          {/*<li>*/}
                              {/*<NavLink underline="#2980b9" to="/">*/}
                                  {/*Contact*/}
                              {/*</NavLink>*/}
                          {/*</li>*/}
                      </ul>
                  </SiteNav>
              </SiteHeader>
              <Main>{children}</Main>
          </>

  )
};

export default Layout

