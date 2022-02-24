import {TextInput, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${RFValue(20)}px;
`;

export const ButtonMinus = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(10)}px;
    border-width: ${RFValue(1)}px;
    border-color: ${({theme}) => theme.colors.primary};
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;
`;

export const ContainerInput = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${RFValue(48)}px;
    width: ${RFValue(48)}px;
    margin-left: ${RFValue(5)}px;
    margin-right: ${RFValue(5)}px;
    border-radius: ${RFValue(10)}px;
    background-color: ${({theme}) => theme.colors.primary2};
`;

export const Input = styled(TextInput)`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(24)}px;
    font-weight: 900;
`;

export const ButtonPlus = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(10)}px;
    border-width: ${RFValue(1)}px;
    border-color: ${({theme}) => theme.colors.primary};
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;
`;

export const ButtonTitle = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(24)}px;
    font-weight: 900;
`;

export const ContainerButtonQuantity = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ContainerButtonAdd = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-left: ${RFValue(10)}px;
`;

export const ButtonAdd = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${RFValue(48)}px;
    border-radius: ${RFValue(10)}px;
    background-color: ${({theme}) => theme.colors.primary};
`;

export const ButtonAddTitle = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(18)}px;
    font-weight: 700;
`;
