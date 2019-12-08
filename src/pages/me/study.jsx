import React ,{ Component } from 'react'
import styled from 'styled-components'

import { Parallax } from 'react-spring/renderprops-addons.cjs'
// Components
import Layout from '../components/Layout'
import { SiteTitle, MainWrapper } from '../components/Headings';
import Footer from '../components/Footer';
import Fire from '../firebase/sndLayout'
import Firefetch from '../firebase/FetchingExample'
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
            <SiteTitle>Born in 1997, Boy, Cool hacker</SiteTitle>
              </Main>
          </MainWrapper>
        </Layout>
        <Footer/>
        </>

    );
  }
}


