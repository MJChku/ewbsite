import React from "react";
import "typeface-cantata-one";
import "typeface-open-sans";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import "typeface-lato";
import "typeface-inconsolata";
import Navhead from "./Dropdown";
import "./styles.css";
import More from "./More";
import {
  SiteHeader, SiteNav, NavLink, Logo, Name, Main
} from "./Headings";
//
// const Layout = () => (
//   <>
//     <SEO />
//     <GlobalStyle />
//   </>
// )

import { navigation } from "../../static/data/navigation";

class Layout extends React.Component{
  constructor(props) {
    super(props);
    this.state = {page: null};
  }
  componentDidMount()
  {
    if (typeof window === 'undefined') {
      return;
    }
    this.setState(() => ({ page: this.props.location.pathname.replace("/", "") }));
  }

  render() {
    const  children  = this.props.children;
    const page = this.state.page;
    return (
      <>
        <Helmet title="Fly Me To The Moon"/>
        <SiteHeader>
          <Link to="/">
            <Logo>Fly Me To The Moon</Logo>
            <Name> {page === "" ? "" : "所以你什么时候能做我女朋友"}</Name>
          </Link>
          <SiteNav>
            <ul>
              {navigation.notmore.map((page) => (
                <li>
                  <Navhead>{page}</Navhead>
                </li>
              ))}
            </ul>

          </SiteNav>

        </SiteHeader>
        <Main>{children}</Main>
      </>

    );
  }
};

export default Layout;
