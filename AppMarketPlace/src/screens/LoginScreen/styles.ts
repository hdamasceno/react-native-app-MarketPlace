import {Image, Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerHeader = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    z-index: 1;
`;

export const ContainerHeaderInner = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    ${Platform.select({
        ios: css`
            top: -${RFValue(40)}px;
        `,
        android: css`
            top: -${RFValue(5)}px;
        `,
    })};
`;

export const ContainerHeaderInnerImage = styled.View`
    padding-top: ${RFValue(20)}px;
`;

export const HeaderTitle = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(32)}px;
    font-weight: 900;
`;

export const CircleBackground = styled(Image)`
    position: absolute;
    width: 100%;
    z-index: 0;
    ${Platform.select({
        ios: css`
            top: -${RFValue(0)}px;
        `,
        android: css`
            top: -${RFValue(105)}px;
        `,
    })};
`;

export const ContainerLoginOptions = styled.View`
    width: 100%;
    justify-content: flex-end;
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(40)}px;
    margin-bottom: ${RFValue(20)}px;
`;

export const ButtonLoginEmail = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    align-items: center;
    padding: ${RFValue(12)}px;
    border-radius: ${RFValue(8)}px;
`;

export const ButtonLoginEmailTitle = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(14)}px;
    font-weight: 700;
`;

export const ButtonRegister = styled.View`
    width: 100%;
    border-color: ${({theme}) => theme.colors.primary};
    border-width: ${RFValue(1)}px;
    align-items: center;
    margin-top: ${RFValue(10)}px;
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(8)}px;
`;

export const ButtonRegisterTitle = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(14)}px;
    font-weight: 700;
`;

export const ContainerSlpitter = styled.View`
    padding: ${RFValue(10)}px;
`;

export const ButtonLoginWithGoogle = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-color: ${({theme}) => theme.colors.borderGray};
    border-width: ${RFValue(1)}px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(10)}px;
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(8)}px;
`;

export const ButtonLoginWithGoogleTitle = styled.Text`
    color: ${({theme}) => theme.colors.gray2};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(14)}px;
    font-weight: 500;
    margin-left: ${RFValue(10)}px;
`;

export const ButtonLoginWithApple = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: ${({theme}) => theme.colors.blue};
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(10)}px;
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(8)}px;
`;

export const ButtonLoginWithAppleTitle = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-size: ${RFValue(14)}px;
    font-weight: 500;
    margin-left: ${RFValue(10)}px;
`;
