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
            <p><a href={Resume} download>Resume in 2020</a> </p>
            <p><a href={HKUT} download>Transcript in The University of Hong Kong</a></p>
            <p><a href={ETHZT} download>Transcript in ETHzurich </a> </p>
            <p><a href={NUT} download>Transcript in Northwestern University </a> </p>    
              </Main>
          </MainWrapper>
        </Layout>
        {/* <Footer/> */}
        </>

    );
  }
}


