import {Image, TouchableOpacity, Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    width: 100%;
`;

export const ContainerBackButton = styled.View`
    position: absolute;
    z-index: 2;
    left: ${RFValue(20)}px;
    top: ${RFValue(getStatusBarHeight() + 10)}px;
`;

export const BackButton = styled(TouchableOpacity)``;

export const ContainerHeartButton = styled.View`
    position: absolute;
    z-index: 2;
    left: ${RFValue(Dimensions.get('window').width) - 100}px;
    top: ${RFValue(getStatusBarHeight() + 10)}px;
`;

export const HeartButton = styled(TouchableOpacity)``;

export const ProductImage = styled(Image)`
    z-index: 1;
    width: 100%;
    height: ${RFValue(250)}px;
`;

export const ContainerProductInfo = styled.View`
    display: flex;
    margin-top: -${RFValue(25)}px;
    padding: ${RFValue(25)}px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: ${RFValue(25)}px;
    z-index: 2;
`;

export const ContainerProductDetail = styled.View`
    display: flex;
`;

export const ContainerProductCategory = styled(TouchableOpacity)`
    position: absolute;
    background-color: ${({theme}) => theme.colors.primary2};
    border-radius: ${RFValue(10)}px;
`;

export const ProductCategory = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(10)}px;
    font-weight: 500;
    padding: ${RFValue(5)}px;
    border-radius: ${RFValue(10)}px;
`;

export const ProductName = styled.Text`
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(24)}px;
    font-weight: 600;
    margin-top: ${RFValue(30)}px;
`;

export const ProductPrice = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(14)}px;
    font-weight: 600;
    margin-top: ${RFValue(10)}px;
`;
