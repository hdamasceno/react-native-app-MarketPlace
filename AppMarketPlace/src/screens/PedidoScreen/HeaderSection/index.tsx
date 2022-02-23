import React from 'react';

import ChevronLeft from '../../../assets/image/chevron-left.svg';
import Cart from '../../../assets/image/cart.svg';
import Search from '../../../assets/image/search.svg';
import Group from '../../../assets/image/Group.svg';
import {
    Container,
    ContainerButton,
    Button,
    Input,
    ContainerInput,
    ContainerCart,
} from './styles';

export function HeaderSection() {
    return (
        <Container>
            <ContainerButton>
                <Button>
                    <ChevronLeft />
                </Button>
            </ContainerButton>
            <ContainerInput>
                <Search />
                <Input placeholder="Search for fruits, vegetables" />
                <Group />
            </ContainerInput>
            <ContainerCart>
                <Button>
                    <Cart />
                </Button>
            </ContainerCart>
        </Container>
    );
}
