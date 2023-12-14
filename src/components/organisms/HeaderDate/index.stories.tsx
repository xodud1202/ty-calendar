import { HeaderDate } from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Organisms/HeaderDate',
	component: HeaderDate,
} satisfies Meta<typeof HeaderDate>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
