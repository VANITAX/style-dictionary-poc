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
          Footer
        </Content>
        <Info>
          <Link href="#" >Link Example</Link>
        </Info>
        <Info>
          <Text>Text Example</Text>
        </Info>
    </Container>
  );
}

export default App;
