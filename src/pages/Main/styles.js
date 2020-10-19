import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background: #8b10ab;
  flex: 1;
  justify-content: center;
  padding-top: ${getStatusBarHeight}px;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  background: #fff;
  border-radius: 4px;
  flex: 1;
  height: 100%;
  left: 0;
  margin: 0 20px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: #999;
  font-size: 14px;
`;

export const Description = styled.Text`
  color: #333;
  font-size: 32px;
  margin-top: 4px;
`;

export const CardFooter = styled.View`
  background: #eee;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 30px;
`;

export const Annotation = styled.Text`
  color: #333;
  font-size: 12px;
`;
