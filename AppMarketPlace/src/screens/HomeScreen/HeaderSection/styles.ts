import {TextInput, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ContainerFixed = styled.View`
    display: flex;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(24)}px;
    font-weight: 900;
`;

export const ContainerHeader = styled.View`
    display: flex;
    width: 100%;
`;

export const ContainerHeaderSearch = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: ${RFValue(10)}px;
`;

export const Input = styled(TextInput)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: ${RFValue(5)}px;
    padding: ${RFValue(8)}px;
    margin-left: ${RFValue(10)}px;
`;

export const ContainerHeaderSearchButtons = styled.View`
    display: flex;
    flex-direction: row;
    padding: ${RFValue(5)}px;
`;

export const MessageButton = styled(TouchableOpacity)`
    padding: ${RFValue(5)}px;
`;

export const NotificationButton = styled(TouchableOpacity)`
    padding: ${RFValue(5)}px;
`;

export const ContainerAddress = styled.View`
    display: flex;
`;

export const AddressSelector = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(14)}px;
    font-weight: 700;
`;
