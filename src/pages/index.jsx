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
            <SiteTitle>Education without barriers</SiteTitle>
                <Fire>
                  <p> fetching goes here</p>
                  <Firefetch />
                </Fire>
            <p>Founded in Sep 2016, Education Without Barriers (EWB) is an end-to-end online tutoring and mentorship
                platform aiming to empower and improve access to education for underprivileged children across the world,
                starting with orphans in China. At EWB, we believe that education is the most powerful, empowering, and enabling of human rights for an individual, and is the best gift one can provide to children.
                Education Without Barriers aims to tackle the problem of unequal access to educational resources.</p>
              </Main>
          </MainWrapper>
        </Layout>
        <Footer/>
        </>

    );
  }
}


