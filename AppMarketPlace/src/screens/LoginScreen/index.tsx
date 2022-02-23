import React from 'react';
import {Image} from 'react-native';
import GoogleLogo from '../../assets/logo/google-logo.svg';
import FacebookLogo from '../../assets/logo/facebook.svg';
import {
    Container,
    ContainerHeader,
    ContainerHeaderInner,
    ContainerHeaderInnerImage,
    HeaderTitle,
    CircleBackground,
    ContainerLoginOptions,
    ButtonLoginEmail,
    ButtonLoginEmailTitle,
    ButtonRegister,
    ButtonRegisterTitle,
    ContainerSlpitter,
    ButtonLoginWithGoogle,
    ButtonLoginWithGoogleTitle,
    ButtonLoginWithApple,
    ButtonLoginWithAppleTitle,
} from './styles';

export function LoginScreen() {
    return (
        <Container>
            <CircleBackground
                source={require('../../assets/image/Ellipse14.png')}
            />

            <ContainerHeader>
                <ContainerHeaderInner>
                    <HeaderTitle>Market Place</HeaderTitle>
                    <ContainerHeaderInnerImage>
                        <Image
                            source={require('../../assets/image/login-logo-1.png')}
                        />
                    </ContainerHeaderInnerImage>
                </ContainerHeaderInner>
            </ContainerHeader>
            <ContainerLoginOptions>
                <ButtonLoginEmail>
                    <ButtonLoginEmailTitle>Login</ButtonLoginEmailTitle>
                </ButtonLoginEmail>
                <ButtonRegister>
                    <ButtonRegisterTitle>Register</ButtonRegisterTitle>
                </ButtonRegister>
                <ContainerSlpitter />
                <ButtonLoginWithGoogle>
                    <GoogleLogo />
                    <ButtonLoginWithGoogleTitle>
                        Login with Google
                    </ButtonLoginWithGoogleTitle>
                </ButtonLoginWithGoogle>
                <ButtonLoginWithApple>
                    <FacebookLogo />
                    <ButtonLoginWithAppleTitle>
                        Login with Apple
                    </ButtonLoginWithAppleTitle>
                </ButtonLoginWithApple>
            </ContainerLoginOptions>
        </Container>
    );
}
