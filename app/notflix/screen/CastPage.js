import React, { Component } from 'react';
import { Container, Header, Content, Footer,Text, FooterTab, Button, Icon } from 'native-base';
export default class CastPage extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
        <View>
            <Text>BLANK CAST PAGE</Text>
        </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}