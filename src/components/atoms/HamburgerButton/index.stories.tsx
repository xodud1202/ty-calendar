import { HamburgerButton } from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Atoms/HamburgerButton',
	component: HamburgerButton,
} satisfies Meta<typeof HamburgerButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
