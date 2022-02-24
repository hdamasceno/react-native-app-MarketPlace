import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
`;

export const ContainerInfoSelector = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-color: ${({theme}) => theme.colors.gray4};
    border-bottom-width: ${RFValue(1)}px;
`;

export const ButtonOption = styled(TouchableOpacity)`
    padding: ${RFValue(10)}px;
    margin: ${RFValue(10)}px;
    border-color: ${({theme}) => theme.colors.primary};
    border-bottom-width: ${RFValue(1)}px;
`;

export const ButtonOptionTitle = styled.Text`
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(14)}px;
    font-weight: 500;
`;

export const ContainerDescription = styled.View`
    padding: ${RFValue(20)}px;
`;

export const Description = styled.Text`
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(10)}px;
    font-weight: 500;
`;
