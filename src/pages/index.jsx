import React ,{ Component } from 'react'
import styled from 'styled-components'

import { Parallax } from 'react-spring/renderprops-addons.cjs'
// Components
import Layout from '../components/Layout'
import { SiteTitle, MainWrapper } from '../components/Headings';


export default class Index extends Component {


  render() {
    return (
        <Layout {...this.props}>
          <MainWrapper>
            <SiteTitle>Education without barriers</SiteTitle>
            <p>Founded in Sep 2016, Education Without Barriers (EWB) is an end-to-end online tutoring and mentorship
                platform aiming to empower and improve access to education for underprivileged children across the world,
                starting with orphans in China. At EWB, we believe that education is the most powerful, empowering, and enabling of human rights for an individual, and is the best gift one can provide to children.
                Education Without Barriers aims to tackle the problem of unequal access to educational resources.</p>
          </MainWrapper>
        </Layout>
    );
  }
}


