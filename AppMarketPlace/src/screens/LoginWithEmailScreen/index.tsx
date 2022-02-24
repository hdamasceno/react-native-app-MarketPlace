import React from 'react';

import BackIcon from '../../assets/image/loginWithEmail/chevron-left.svg';
import Male from '../../assets/image/male-1.svg';

import {
    Container,
    ContainerBackground,
    BackgroundImage,
    ButtonBack,
    ContainerMale,
    ContainerTitle,
    Title,
    ContainerData,
    ContainerInput,
    Input,
    ForgotPasswordButton,
    ForgotPasswordButtonTitle,
    ContainerNewAccount,
    NewAccountText,
    NewAccountButton,
    NewAccountButtonTitle,
    ContainerLoginButton,
    LoginButton,
    LoginButtonTitle,
} from './styles';

export function LoginWithEmailScreen() {
    return (
        <Container>
            <ContainerBackground>
                <BackgroundImage
                    source={require('../../assets/image/loginWithEmail/background-1.png')}
                />
            </ContainerBackground>
            <ButtonBack>
                <BackIcon />
            </ButtonBack>
            <ContainerMale>
                <Male />
            </ContainerMale>
            <ContainerTitle>
                <Title>Login</Title>
            </ContainerTitle>
            <ContainerData>
                <ContainerInput>
                    <Input placeholder="email" />
                </ContainerInput>
                <ContainerInput>
                    <Input placeholder="senha" />
                    <ForgotPasswordButton>
                        <ForgotPasswordButtonTitle>
                            Esqueci minha senha
                        </ForgotPasswordButtonTitle>
                    </ForgotPasswordButton>
                </ContainerInput>
                <ContainerLoginButton>
                    <LoginButton>
                        <LoginButtonTitle>Login</LoginButtonTitle>
                    </LoginButton>
                </ContainerLoginButton>
                <ContainerNewAccount>
                    <NewAccountText>Ainda não tem uma conta ?</NewAccountText>
                    <NewAccountButton>
                        <NewAccountButtonTitle>
                            Crie Agora
                        </NewAccountButtonTitle>
                    </NewAccountButton>
                </ContainerNewAccount>
            </ContainerData>
        </Container>
    );
}
