import {Dimensions, Image, TextInput, TouchableOpacity} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    background-color: ${({theme}) => theme.colors.white};
`;

export const ContainerBackground = styled.View`
    position: relative;
    z-index: 0;
`;

export const BackgroundImage = styled(Image)`
    width: 100%;
    z-index: 1;
`;

export const ButtonBack = styled(TouchableOpacity)`
    position: absolute;
    color: ${({theme}) => theme.colors.white};
    z-index: 2;
    top: ${RFValue(getStatusBarHeight() + 20)}px;
    left: ${RFValue(20)}px;
`;

export const ContainerMale = styled.View`
    position: absolute;
    z-index: 2;
    top: ${RFValue(getStatusBarHeight() + 80)}px;
    left: ${RFValue(Dimensions.get('window').width - 210)}px;
`;

export const ContainerTitle = styled.View`
    display: flex;
    padding: ${RFValue(20)}px;
    margin-top: -${RFValue(110)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(28)}px;
    font-weight: 900;
`;

export const ContainerData = styled.View`
    display: flex;
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(60)}px;
`;

export const ContainerInput = styled.View`
    display: flex;
    margin-top: ${RFValue(10)}px;
`;

export const Input = styled(TextInput)`
    padding: ${RFValue(15)}px;
    border-radius: ${RFValue(5)}px;
    background-color: ${({theme}) => theme.colors.gray4};

    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(16)}px;
    font-weight: 500;
`;

export const ForgotPasswordButton = styled(TouchableOpacity)`
    align-items: flex-end;
    margin-top: ${RFValue(5)}px;
`;

export const ForgotPasswordButtonTitle = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(12)}px;
    font-weight: 500;
`;

export const ContainerLoginButton = styled.View`
    display: flex;
    width: 100%;
    margin-top: ${RFValue(20)}px;
`;

export const LoginButton = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: ${RFValue(10)}px;
    padding-top: ${RFValue(15)}px;
    padding-bottom: ${RFValue(15)}px;
`;

export const LoginButtonTitle = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(18)}px;
    font-weight: 700;
`;

export const ContainerNewAccount = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: ${RFValue(30)}px;
`;

export const NewAccountText = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(12)}px;
    font-weight: 400;
`;

export const NewAccountButton = styled(TouchableOpacity)`
    align-items: flex-end;
    margin-left: ${RFValue(10)}px;
`;

export const NewAccountButtonTitle = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(12)}px;
    font-weight: 900;
`;
