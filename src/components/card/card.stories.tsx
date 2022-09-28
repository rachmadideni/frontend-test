import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card from './card';

export default {
    title:'Card',
    component: Card
} as ComponentMeta<typeof Card>;

export const BasicCard: ComponentStory<typeof Card> = (args) => <Card {...args} />;

BasicCard.args = {}