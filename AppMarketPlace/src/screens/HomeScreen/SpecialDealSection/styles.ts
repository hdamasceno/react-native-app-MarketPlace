import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
`;

export const ContainerHeader = styled.View`
    display: flex;
    flex-direction: row;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(18)}px;
    font-weight: 500;
`;

export const Button = styled(TouchableOpacity)`
    display: flex;
    flex-direction: row;
`;

export const ButtonTitle = styled.Text`
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(18)}px;
    font-weight: 500;
`;
