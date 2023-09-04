import Styled from 'styled-components';

import { TextFontSizeLDesktop, TextFontSizeSTablet, ColorTealblue100100,  ColorNeutral0100, ColorNeutral100100 } from './variables/tokens.js';
import logo from './logo.svg';

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${ColorNeutral0100};
`

const Logo = Styled.img`
  width: 120px;
`

const Content = Styled.p`
  font-size: ${TextFontSizeLDesktop};
  width: 328px;
  text-align: center;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  color: ${ColorNeutral100100};
`;

const Info = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Text = Styled.span`
  font-size: ${TextFontSizeSTablet};
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  color: ${ColorNeutral100100};
`;

const Link = Styled.a`
  display: block;
  font-size: ${TextFontSizeSTablet};
  color: ${ColorTealblue100100};
  text-decoration: none;
`

function App() {
  return (
    <Container>
        <Logo src={logo} className="App-logo" alt="logo" />
        <Content>
          版本 2.30.0 <br/>
          272-4b5d314e, iOS Enterprise <br/>
          ©SWAG 保留一切權利
        </Content>
        <Info>
          <Text>觀看更多資訊</Text>
          <Link href="https://www.swag.live/" >https://www.swag.live/</Link>
        </Info>
        <Info>
          <Text>聯繫客服</Text>
          <Link href="mailto:support@swag.live" >support@swag.live</Link>
        </Info>
    </Container>
  );
}

export default App;
