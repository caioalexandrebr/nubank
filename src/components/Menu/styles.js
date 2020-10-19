import {StyleSheet, Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  align-self: center;
  background: #fff;
  border-radius: 4px;
  padding: 8px;
`;

export const Nav = styled.View`
  border-top-color: rgba(255, 255, 255, 0.8);
  border-top-width: ${StyleSheet.hairlineWidth}px;
  margin-top: 30px;
  width: 100%;
`;

export const NavItem = styled.View`
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  padding: 14px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const NavInfo = styled.View`
  flex-direction: row;
`;

export const NavText = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 14px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-color: rgba(255, 255, 255, 0.8);
  border-width: ${StyleSheet.hairlineWidth}px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  margin-top: 20px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
