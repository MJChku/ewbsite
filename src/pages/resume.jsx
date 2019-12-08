import React ,{ Component } from 'react'
import styled from 'styled-components'

import { Parallax } from 'react-spring/renderprops-addons.cjs'
// Components
import Layout from '../components/Layout'
import { SiteTitle, MainWrapper } from '../components/Headings';
import Footer from '../components/Footer';
const Main = styled.main`
  max-width: 960px;
  margin: 50px auto;
  min-height: 70vh;
  padding: 100px 5% 80px;
`

export default class Index extends Component {


  render() {
    return (
        <>
        <Layout {...this.props}>
          <MainWrapper>
              <Main>
            <SiteTitle >Down my resume here</SiteTitle>
            <a href="../me/resume.pdf" download>Click to download</a>
            
              </Main>
          </MainWrapper>
        </Layout>
        <Footer/>
        </>

    );
  }
}


