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
            <SiteTitle >Ha Ha Ha</SiteTitle>
             <p> 其实我也不知道想说啥，因为我好怂， 啥也不敢说，借着酒能说一点点，而且说完就后悔了。 那次问你第一眼心动的人还能不能做朋友， 那不是肯定不能嘛，其实我第一眼心动的人就是你呗，但是好怂，不知道怎么找你，每次看到你都好开心，但是我又得装得酷酷的 因为你不认识我啊！和你聊天才发现你好可爱，高兴的时候会蹦起来那种，会怕让别人失望而担忧难过，而且一起的时候你老是蜷缩在角落里像个猫猫， 你还会一个人默默的debug很久很久... 还有好多好多哈哈哈哈哈 其实我昨天晚上看你那么累还是好心疼的哈哈哈哈哈 不该跟你聊那么那么久呗 但是好多好多话想跟你说 昨天问飞机要是坠毁了 我想跟什么人说啥 我差一点点就要说你了 但是我没喝酒说不出口！
                 </p> 
             <br>     
           <p>我快running out of tricks了，所以以后想跟你见面都会变得好难， 不知道还能找你干啥才能显得不那么刻意。明明离得那么近却要故意疏远的感觉好难过，就算我还有好多好多trick能找你出来玩，也不想一周只能见你一次呗，所以你看看最上面...
</p>  
              </Main>
          </MainWrapper>
        </Layout>
        {/* <Footer/> */}
        </>

    );
  }
}


