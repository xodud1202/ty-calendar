import { Header } from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Templates/Header',
	component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
