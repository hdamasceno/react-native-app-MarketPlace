import {Image, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    border-radius: ${RFValue(10)}px;
    background-color: ${({theme}) => theme.colors.white};
    margin: ${RFValue(10)}px;
    shadow-color: rgba(0, 0, 0, 0.8);
    shadow-offset: 0px 1.5px;
    shadow-opacity: 0.5;
    shadow-radius: 2px;
    z-index: 0;
`;

export const ContainerImage = styled.View`
    display: flex;
    height: ${RFValue(131)}px;
    width: ${RFValue(150)}px;
    left: ${RFValue(0)}px;
    z-index: 1;
`;

export const ContainerHeartIcon = styled.View`
    position: absolute;
    z-index: 1;
    top: ${RFValue(10)}px;
    left: ${RFValue(113)}px;
`;

export const ContainerProductName = styled.View`
    display: flex;
    padding-left: ${RFValue(10)}px;
`;

export const ProductImage = styled(Image)`
    width: 100%;
`;

export const ProductName = styled.Text`
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(12)}px;
    font-weight: 500;
`;

export const ProductWeight = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(12)}px;
    font-weight: 800;
    margin-top: ${RFValue(5)}px;
`;

export const ContainerButtonAdd = styled.View`
    display: flex;
    align-items: flex-end;
    padding: ${RFValue(10)}px;
`;

export const ButtonAdd = styled(TouchableOpacity)`
    border-color: ${({theme}) => theme.colors.primary};
    border-width: ${RFValue(1)}px;
    border-radius: ${RFValue(4)}px;
    padding: ${RFValue(3)}px;
`;
