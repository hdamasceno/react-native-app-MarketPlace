import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    align-items: center;
    padding: ${RFValue(10)}px;
    width: ${RFValue(76)}px;
    height: ${RFValue(113)}px;
`;

export const ContainerImage = styled.View`
    background-color: rgba(81, 188, 125, 0.2);
    border-radius: ${RFValue(20)}px;
    padding: ${RFValue(10)}px;
    align-items: center;
    min-height: ${RFValue(53)}px;
    min-width: ${RFValue(53)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(10)}px;
    font-weight: 500;
    margin-top: ${RFValue(10)}px;
`;
