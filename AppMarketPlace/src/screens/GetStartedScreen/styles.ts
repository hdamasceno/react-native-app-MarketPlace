import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.primary};
    align-items: center;
    justify-content: space-between;
    padding: ${RFValue(20)}px;
`;

export const ContainerElipse = styled.View`
    position: absolute;
`;

export const Title = styled.Text`
    margin-top: ${getStatusBarHeight() + 4}px;
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(32)}px;
    font-weight: 900;
`;

export const ContainerImage = styled.View`
    display: flex;
    flex-direction: row;
`;

export const DescriptionText = styled.Text`
    margin-top: ${getStatusBarHeight() + 4}px;
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(16)}px;
    font-weight: 500;
`;

export const ContainerButton = styled.View`
    display: flex;
    width: 100%;
`;

export const Button = styled(TouchableOpacity)`
    background-color: ${({theme}) => theme.colors.white};
    padding: ${RFValue(20)}px;
    border-radius: ${RFValue(10)}px;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(16)}px;
    font-weight: 500;
`;

export const ContainerFooter = styled.View``;
