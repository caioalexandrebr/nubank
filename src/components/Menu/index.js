import React from 'react';
import QRCode from 'react-native-qrcode-generator';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {View} from 'react-native';

import {Container, Code, Nav, NavItem, NavInfo, NavText} from './styles';

function Menu() {
  return (
    <Container>
      <Code>
        <QRCode value="ola mundo!" size={80} bgColor="#8b10ae" fgColor="#fff" />
      </Code>
      <Nav>
        <NavItem>
          <NavInfo>
            <Icon name="help-outline" size={20} color="#fff" />
            <NavText>Me ajuda</NavText>
          </NavInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        <NavItem>
          <NavInfo>
            <Icon name="person-outline" size={20} color="#fff" />
            <NavText>Perfil</NavText>
          </NavInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        <NavItem>
          <NavInfo>
            <Icon name="credit-card" size={20} color="#fff" />
            <NavText>Configurar cartão</NavText>
          </NavInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        <NavItem>
          <NavInfo>
            <Icon name="smartphone" size={20} color="#fff" />
            <NavText>Configurações do app</NavText>
          </NavInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
      </Nav>
    </Container>
  );
}

export default Menu;
