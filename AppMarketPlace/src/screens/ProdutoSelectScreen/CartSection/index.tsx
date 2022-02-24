import React from 'react';

import {
    Container,
    ContainerButtonQuantity,
    ButtonMinus,
    ContainerInput,
    Input,
    ButtonPlus,
    ButtonTitle,
    ContainerButtonAdd,
    ButtonAdd,
    ButtonAddTitle,
} from './styles';

export function CartSection() {
    return (
        <Container>
            <ContainerButtonQuantity>
                <ButtonMinus>
                    <ButtonTitle>-</ButtonTitle>
                </ButtonMinus>
                <ContainerInput>
                    <Input placeholder="1" />
                </ContainerInput>
                <ButtonPlus>
                    <ButtonTitle>+</ButtonTitle>
                </ButtonPlus>
            </ContainerButtonQuantity>
            <ContainerButtonAdd>
                <ButtonAdd>
                    <ButtonAddTitle>Adicionar</ButtonAddTitle>
                </ButtonAdd>
            </ContainerButtonAdd>
        </Container>
    );
}
