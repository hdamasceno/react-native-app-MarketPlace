import React from 'react';

import {
    Container,
    ContainerInfoSelector,
    ButtonOption,
    ButtonOptionTitle,
    ContainerDescription,
    Description,
} from './styles';

export function ProductDescriptionSection() {
    return (
        <Container>
            <ContainerInfoSelector>
                <ButtonOption>
                    <ButtonOptionTitle>Descrição</ButtonOptionTitle>
                </ButtonOption>
                <ButtonOption>
                    <ButtonOptionTitle>Nutrição</ButtonOptionTitle>
                </ButtonOption>
            </ContainerInfoSelector>
            <ContainerDescription>
                <Description>
                    The carrot is a root vegetable,most commonly observedas
                    orange {'\n'} in color, though purple, black, red, white,
                    and yellow cultivars exist, {'\n'}
                    all of which are domesticated forms of the wild carrot,
                    Daucus carota, {'\n'}
                    native to Europe and Southwestern Asia.
                </Description>
            </ContainerDescription>
        </Container>
    );
}
