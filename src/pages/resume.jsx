import React ,{ Component } from 'react'
import styled from 'styled-components'
import Resume from '../../static/me/CV (10).pdf'
import HKUT from '../../static/me/transcript.pdf'
import ETHZT from '../../static/me/ETH_Transcript.pdf'
import NUT from '../../static/me/NUT.pdf'
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
            <SiteTitle >See My Docs Below</SiteTitle>
            <p href={Resume} download>Resume in 2020</p>
            <p href={HKUT} download>Transcript in The University of Hong Kong</p>
            <p href={ETHZT} download>Transcript in ETHzurich</p>
            <p href={NUT} download>Transcript in Northwestern University</p>    
              </Main>
          </MainWrapper>
        </Layout>
        {/* <Footer/> */}
        </>

    );
  }
}


