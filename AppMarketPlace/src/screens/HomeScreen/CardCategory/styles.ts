import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    padding-left: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(24)}px;
    font-weight: 900;
    margin-bottom: ${RFValue(20)}px;
`;
