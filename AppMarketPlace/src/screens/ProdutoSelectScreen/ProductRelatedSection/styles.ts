import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    padding: ${RFValue(10)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(12)}px;
    font-weight: 500;
    margin-bottom: ${RFValue(10)}px;
`;
