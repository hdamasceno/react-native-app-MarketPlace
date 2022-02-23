import React from 'react';

import Elipse from '../../assets/image/GetStartedEllipse.svg';
import Female from '../../assets/image/female-1.svg';
import Male from '../../assets/image/male-1.svg';

import {
    Container,
    ContainerElipse,
    Title,
    ContainerImage,
    DescriptionText,
    ContainerButton,
    Button,
    ContainerFooter,
    ButtonText,
} from './styles';

export function GetStartedScreen() {
    return (
        <Container>
            <ContainerElipse>
                <Elipse />
            </ContainerElipse>
            <Title>Market Place</Title>
            <ContainerImage>
                <Female width={125} height={285} />
                <Male width={125} height={285} />
            </ContainerImage>
            <DescriptionText>
                Olá Henry Lima {'\n'}
                Seja bem vindo ao App Market Place
            </DescriptionText>
            <ContainerButton>
                <Button>
                    <ButtonText>Iniciar minhas compras</ButtonText>
                </Button>
            </ContainerButton>
            <ContainerFooter />
        </Container>
    );
}
