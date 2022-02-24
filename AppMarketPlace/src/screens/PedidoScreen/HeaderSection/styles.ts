import {TextInput, TouchableOpacity} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    padding: ${RFValue(10)}px;
    margin-top: ${getStatusBarHeight() + 10}px;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerButton = styled.View`
    display: flex;
    align-items: center;
`;

export const Button = styled(TouchableOpacity)`
    padding: ${RFValue(10)}px;
`;

export const ContainerInput = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) => theme.colors.gray4};
    border-color: ${({theme}) => theme.colors.gray4};
    border-width: ${RFValue(1)}px;
    border-radius: ${RFValue(10)}px;
    padding: ${RFValue(10)}px;
`;

export const Input = styled(TextInput)`
    flex: 1;
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(16)}px;
    font-weight: 500;
    margin-left: ${RFValue(10)}px;
    margin-right: ${RFValue(10)}px;
`;

export const ContainerCart = styled.View`
    display: flex;
`;
