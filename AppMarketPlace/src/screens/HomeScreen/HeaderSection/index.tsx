import React from 'react';

import MessageIcon from '../../../assets/image/message-icon.svg';
import NotificationIcon from '../../../assets/image/notification-icon.svg';
import {
    ContainerFixed,
    Title,
    ContainerHeader,
    ContainerHeaderSearch,
    ContainerHeaderSearchButtons,
    Input,
    MessageButton,
    NotificationButton,
    ContainerAddress,
    AddressSelector,
} from './styles';

export function HeaderSection() {
    return (
        <ContainerFixed>
            <Title>Market Place</Title>
            <ContainerHeader>
                <ContainerHeaderSearch>
                    <Input />
                    <ContainerHeaderSearchButtons>
                        <MessageButton>
                            <MessageIcon />
                        </MessageButton>
                        <NotificationButton>
                            <NotificationIcon />
                        </NotificationButton>
                    </ContainerHeaderSearchButtons>
                </ContainerHeaderSearch>
            </ContainerHeader>
            <ContainerAddress>
                <AddressSelector>
                    Av. Getúlio Vargas, 123 Apto 1
                </AddressSelector>
            </ContainerAddress>
        </ContainerFixed>
    );
}
