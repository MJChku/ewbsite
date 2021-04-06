import React ,{ Component } from 'react'
import styled from 'styled-components'

import { Parallax } from 'react-spring/renderprops-addons.cjs'
// Components
import Layout from '../components/Layout'
import { SiteTitle, MainWrapper } from '../components/Headings';
import Footer from '../components/Footer';
import Fire from '../firebase/sndLayout'
import Firefetch from '../firebase/FetchingExample'
import background from "../../static/images/team/team.jpg";
const Main = styled.main`
  max-width: 960px;
  margin: 50px auto;
  min-height: 70vh;
  padding: 100px 5% 80px;
`
const back = styled.div`
backgroundImage: url(${background});
`

export default class Index extends Component {


  render() {
    return (
        <>
        <Layout {...this.props}>
          <back>
          <MainWrapper img={background}>
              <Main>
            {/* <SiteTitle>Born in 1997, Actuary, Hacker, Defender, Gamer, Youtuber a.k.a Peace lover.</SiteTitle>
             */}
             <SiteTitle>Fly Me To The Moon --- cookie version. </SiteTitle>
             <SiteTitle>  </SiteTitle>
              </Main>
          </MainWrapper>
          </back>
        </Layout>
        
        {/* <Footer/> */}
        </>

    );
  }
}


