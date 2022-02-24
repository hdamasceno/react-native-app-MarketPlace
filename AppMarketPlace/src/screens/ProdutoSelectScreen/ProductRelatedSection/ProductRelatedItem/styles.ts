import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(1)}px;
    margin-right: ${RFValue(5)}px;
    border-radius: ${RFValue(5)}px;
    border-width: ${RFValue(1)}px;
    border-color: ${({theme}) => theme.colors.gray4};
`;

export const ContainerImage = styled.View`
    justify-content: center;
    min-height: ${RFValue(63)}px;
    min-width: ${RFValue(84)}px;
`;

export const ContainerProductInfo = styled.View`
    display: flex;
    flex-direction: column;
    padding: ${RFValue(5)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(10)}px;
    font-weight: 500;
`;

export const Price = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(10)}px;
    font-weight: 900;
    margin-top: ${RFValue(5)}px;
`;
