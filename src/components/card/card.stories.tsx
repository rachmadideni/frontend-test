import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';


import Card, { ICustomCard } from './card';

export default {
    title:'Card',
    component: Card
} as ComponentMeta<typeof Card>;

const data: ICustomCard = {
    title: 'Flood Zone 3',
    image: 'card-image.png',
    alt: 'my image alternate text'
}

export const BasicCard: ComponentStory<typeof Card> = (args) => <Card {...args} />;

BasicCard.args = {}